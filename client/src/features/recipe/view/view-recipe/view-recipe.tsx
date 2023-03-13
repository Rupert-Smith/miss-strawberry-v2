import React, { useRef } from "react";
import styles from "./_view-recipe.module.scss";
import {
  RecipeCardBody,
  RecipeCardHead,
  RecipeCardContainer,
} from "features/recipe/components/recipe-cards/recipe-cards";
import { CloseButton } from "common/components/buttons/close-button";
import { ViewRecipeTips } from "./components/view-recipe-tips";
import { ViewRecipeOverview } from "./components/view-recipe-overview";
import { ViewRecipeIngredients } from "./components/view-recipe-ingredients";
import { ViewRecipeTags } from "./components/view-recipe-tags";
import { ViewRecipeSteps } from "./components/view-recipe-steps";
import { TypeRecipe } from "common/types/common-types";
import { ReactComponent as LeftArrowIcon } from "assets/icons/circle-arrow-left-solid.svg";
import { ReactComponent as RightArrowIcon } from "assets/icons/circle-arrow-right-solid.svg";
import { Scrollbar } from "react-scrollbars-custom";
import { useDispatch } from "react-redux";
import { cardsActions } from "common/store/cards-slice";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import { ActionButtonsBlock } from "common/components/buttons/action-buttons-block";
import useGetCurrentRecipe from "../hooks/use-get-current-recipe";

function ViewRecipe() {
  const recipe = useSelector(
    (state: RootState) => state.recipes.currentlySelectedRecipe
  );

  return (
    <RecipeCardContainer propsClassName={styles["recipe-card-master"]}>
      <RecipeHead recipe={recipe} />
      <RecipeBody recipe={recipe} />
    </RecipeCardContainer>
  );
}

type RecipeHeadProps = {
  recipe: TypeRecipe;
};

function RecipeHead({ recipe }: RecipeHeadProps) {
  const dispatch = useDispatch();

  return (
    <RecipeCardHead propsClassName={styles["header-main"]}>
      {/* <div className={styles["header-action-buttons"]}>
        <AddToCartButton small />
        <AddToFavouritesButton small />
        <EditRecipeButton small />
      </div> */}
      <ActionButtonsBlock
        recipeId={recipe._id}
        favourite={recipe.meta?.favourite}
        setHoveredElement={() => {}}
      />
      <div className={styles["header-column-middle"]}>
        <LeftArrowIcon />
        <div className={styles["header-recipe-title"]}>
          {recipe.overview.title}
        </div>
        <RightArrowIcon />
      </div>
      <div
        className={`${styles["header-column-right"]} ${styles["header-column"]}`}
      >
        <CloseButton
          propsOnClick={() => {
            dispatch(
              cardsActions.setCurrentOpenFeatureCards({
                cardAction: "remove",
                cardId: "recipeView",
              })
            );
          }}
          black
        />
      </div>
    </RecipeCardHead>
  );
}

type RecipeBodyProps = {
  recipe: TypeRecipe;
};

function RecipeBody({ recipe }: RecipeBodyProps) {
  function isOverflown(element: any) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  const recipeBody = useRef();

  const viewModulesCondition = useSelector(
    (state: RootState) => state.recipeLayout.viewModulesCondition
  );

  const removeStepsGap =
    viewModulesCondition.ingredients && viewModulesCondition.steps;

  return (
    <RecipeCardBody ref={recipeBody} propsClassName={styles["recipe-body"]}>
      <ViewRecipeOverview recipe={recipe} />
      {viewModulesCondition.ingredients && (
        <ViewRecipeIngredients recipe={recipe} />
      )}
      {viewModulesCondition.steps && <ViewRecipeSteps recipe={recipe} />}

      <div
        className={`${styles["recipe-body-row-two"]} ${
          removeStepsGap && styles["remove-steps-gap"]
        }`}
      >
        {viewModulesCondition.ingredients || (
          <ViewRecipeIngredients recipe={recipe} />
        )}
        {viewModulesCondition.steps || <ViewRecipeSteps recipe={recipe} />}
      </div>
      <ViewRecipeTips recipe={recipe} />
      <ViewRecipeTags recipe={recipe} />
    </RecipeCardBody>
  );
}

export { ViewRecipe };
