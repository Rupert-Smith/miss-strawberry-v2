import useDefaultCall from "common/hooks/use-default-call";
import usePopupConfigActions from "common/popup/hooks/use-popup-config-actions";
import { findReplace } from "common/helpers/find-replace";
import { useDispatch } from "react-redux";
import { resultsActions } from "features/results/store/results-slice";

export default function useSubmitRecipe() {
  const { successCustomButtonsNoCross } = usePopupConfigActions();
  const dispatch = useDispatch();
  const { defaultCall } = useDefaultCall();

  const submitRecipe = (recipeState: any, closeRecipe: Function) => {
    // clean up recipe

    // check to make sure any category : null is replaced with 'other'

    recipeState.ingredients.forEach((ingredient: any) => {
      if (ingredient.blockData.category === null) {
        ingredient.blockData.category = "other";
      }
    });

    function callSuccess(callReturn: any) {
      const returnRecipe = callReturn.data.data.data;
      dispatch(resultsActions.addRecipeToResults(returnRecipe));

      successCustomButtonsNoCross(
        "recipe successfully created!",
        [
          {
            actionId: "close",
            actionText: "close",
            actionFunction: closeRecipe,
          },
        ],
        "success!"
      );
    }

    const errorCleanup = (errorMessage: string) => {
      const stringReplacements = [
        { find: "overview.rating:", replace: "" },
        { find: "overview.price:", replace: "" },
        { find: "overview.cookingTime:", replace: "" },
        { find: "overview.title:", replace: "" },
      ];

      let cleanErrorMessage = findReplace(errorMessage, stringReplacements);

      // try to remove 'please provide' from error (too many times)
      let i = 0;
      cleanErrorMessage = cleanErrorMessage.replace(/please provide/g, (m) =>
        !i++ ? m : ""
      );

      return cleanErrorMessage;
    };

    const callConfig = {
      axiosConfig: {
        url: "/recipes/create-recipe",
        method: "post",
        data: recipeState,
      },
      callSuccess,
      errorHeader: "create recipe failed",
      cleanUp: true,
      errorCleanup,
    };

    defaultCall(callConfig);
  };

  return { submitRecipe };
}
