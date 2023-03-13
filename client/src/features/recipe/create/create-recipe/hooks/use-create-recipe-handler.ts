import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cardsActions } from "common/store/cards-slice";
import { headerSidebarActions } from "common/store/header-sidebar-slice";
import usePopupConfigActions from "common/popup/hooks/use-popup-config-actions";
import useSubmitRecipe from "../../hooks/use-submit-recipe";

export default function useCreateRecipeHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { warningCustomButtons } = usePopupConfigActions();

  const openCreateRecipe = () => {
    dispatch(headerSidebarActions.setNewReceipeDisabled());
    dispatch(
      cardsActions.setCurrentOpenFeatureCards({
        cardAction: "add",
        cardId: "newRecipe",
      })
    );
    navigate("/new-recipe");
  };

  function closeCreateRecipe() {
    dispatch(headerSidebarActions.resetDisabled());
    dispatch(cardsActions.resetDefaultCards());
  }

  const closeHandler = () => {
    warningCustomButtons(
      "are you sure you want to close? your recipe will be completely erased forever...",
      [
        {
          actionText: "erase it forever",
          actionId: "closeCreateRecipe",
          actionFunction: closeCreateRecipe,
        },
        { actionId: "cancel" },
      ]
    );
  };

  const { submitRecipe } = useSubmitRecipe();

  const submitRecipeCheck = (recipeState: any) => {
    warningCustomButtons("are you sure you want to submit?", [
      {
        actionText: "submit",
        actionId: "submitRecipe",
        actionFunction: () => {
          submitRecipe(recipeState, closeCreateRecipe);
        },
        triggerLoading: true,
      },
      { actionId: "cancel" },
    ]);
  };

  return {
    openCreateRecipe,
    closeCreateRecipe,
    submitRecipeCheck,
    closeHandler,
  };
}
