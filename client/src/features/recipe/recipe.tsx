import React, { useRef } from "react";
import styles from "./_recipe.module.scss";
import {
  RecipeCardBody,
  RecipeCardHead,
  RecipeCardContainer,
} from "common/components/cards/recipe-card/recipe-card";
import { RECIPIES } from "common/temp-data/TEMP_DATA";
import {
  AddToCartButton,
  EditRecipeButton,
  AddToFavouritesButton,
} from "common/components/buttons/action-buttons/core-action-buttons";
import { CloseButton } from "common/components/buttons/close-button";
import { Tips } from "./components/tips/tips";
import { Overview } from "./components/overview";
import { Ingredients } from "./components/ingredients";
import { Steps } from "./components/steps";
import { Tags } from "./components/tags";
import { TypeRecipe } from "common/types/common-types";
import { ReactComponent as LeftArrowIcon } from "assets/icons/circle-arrow-left-solid.svg";
import { ReactComponent as RightArrowIcon } from "assets/icons/circle-arrow-right-solid.svg";
import { Scrollbar } from "react-scrollbars-custom";
import { useDispatch } from "react-redux";
import { commonAppActions } from "common/store/common-app-slice";

function Recipe() {
  const selectedRecipe = RECIPIES[0];

  return (
    <RecipeCardContainer propsClassName={styles["recipe-card-master-stretch"]}>
      <RecipeHead selectedRecipe={selectedRecipe} />
      <RecipeBody selectedRecipe={selectedRecipe} />
    </RecipeCardContainer>
  );
}

type RecipeHeadProps = {
  selectedRecipe: TypeRecipe;
};

function RecipeHead({ selectedRecipe }: RecipeHeadProps) {
  const dispatch = useDispatch();

  return (
    <RecipeCardHead propsClassName={styles["header-main"]}>
      <div className={styles["header-action-buttons"]}>
        <AddToCartButton small />
        <AddToFavouritesButton small />
        <EditRecipeButton small />
      </div>
      <div className={styles["header-column-middle"]}>
        <LeftArrowIcon />
        <div className={styles["header-recipe-title"]}>
          {selectedRecipe.overview.title}
        </div>
        <RightArrowIcon />
      </div>
      <div
        className={`${styles["header-column-right"]} ${styles["header-column"]}`}
      >
        <CloseButton
          propsOnClick={() => {
            dispatch(
              commonAppActions.setCurrentOpenFeatureCards({
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
  selectedRecipe: TypeRecipe;
};

function RecipeBody({ selectedRecipe }: RecipeBodyProps) {
  function isOverflown(element: any) {
    console.log(element);
    console.log(element.clientHeight);
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  const recipeBody = useRef();

  console.log(isOverflown(recipeBody));

  return (
    <RecipeCardBody ref={recipeBody} propsClassName={styles["recipe-body"]}>
      <div className={styles["recipe-body-row-one"]}>
        <Overview recipe={selectedRecipe} />
      </div>
      <div className={styles["recipe-body-row-two"]}>
        <Ingredients recipe={selectedRecipe} />
        <Steps recipe={selectedRecipe} />
      </div>
      <div className={styles["recipe-body-row-three"]}>
        <Tips recipe={selectedRecipe} />
      </div>
      <Tags recipe={selectedRecipe} />
    </RecipeCardBody>
  );
}

export { Recipe };
