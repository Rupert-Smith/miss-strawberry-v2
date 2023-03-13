import useDefaultCall from "common/hooks/use-default-call";
import { useDispatch } from "react-redux";
import { resultsActions } from "features/results/store/results-slice";
import { recipeActions } from "common/store/recipes-slice";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function useCoreActionButtons() {
  const { defaultCall } = useDefaultCall();
  const dispatch = useDispatch();
  const currentlySelectedRecipe = useSelector(
    (state: RootState) => state.recipes.currentlySelectedRecipe
  );

  const handleToggleFavourites = (recipeId: string, favourite: boolean) => {
    const callSuccess = (callReturn: any) => {
      const returnRecipe = callReturn.data.data.data;

      dispatch(resultsActions.updateOne(returnRecipe));

      if (currentlySelectedRecipe._id === returnRecipe._id) {
        dispatch(recipeActions.setCurrentSelectedRecipe(returnRecipe));
      }
    };

    defaultCall({
      axiosConfig: {
        url: `/recipes/${recipeId}`,
        method: "patch",
        data: { meta: { favourite } },
      },
      callSuccess,
      errorHeader: "something went wrong",
    });
  };

  return { handleToggleFavourites };
}
