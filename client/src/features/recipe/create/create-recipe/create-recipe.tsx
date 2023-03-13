import styles from "./_create-recipe.module.scss";
import { ReactComponent as CreateRecipeIcon } from "assets/icons/bowl-chopsticks-light.svg";
import { GeneralHeading } from "common/components/general-heading";
import {
  RecipeCardContainer,
  RecipeCardHead,
} from "features/recipe/components/recipe-cards/recipe-cards";
import { RecipeCardBody } from "features/recipe/components/recipe-cards/recipe-cards";
import { CloseButton } from "common/components/buttons/close-button";
import { SquareButton } from "common/components/buttons/square-button";
import { CreateRecipeStandard } from "../components/create-recipe-standard";
import { useState } from "react";
import { CreateRecipeOverview } from "../components/create-recipe-overview";
import useCreateRecipeHandler from "./hooks/use-create-recipe-handler";

function CreateRecipe() {
  const { submitRecipeCheck, closeHandler } = useCreateRecipeHandler();

  const [overview, setOverview] = useState({
    title: "",
    cookingTime: "00:00",
    defaultServingNumber: null,
    price: null,
    rootDirectory: null,
    // subDirectory: null,
    rating: null,
    vegetarian: null,
    vegan: null,
    link: "",
    country: "",
  });
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [tips, setTips] = useState([]);
  const [tags, setTags] = useState([]);

  const recipeState = {
    overview,
    ingredients,
    steps,
    tips,
    tags,
  };
  const recipeSetters = {
    setOverview,
    setIngredients,
    setSteps,
    setTips,
    setTags,
  };

  return (
    <RecipeCardContainer propsClassName={styles["recipe-card-container"]}>
      <CreateRecipeHead
        closeHandler={closeHandler}
        submitRecipeCheck={() => {
          submitRecipeCheck(recipeState);
        }}
      />
      <CreateRecipeBody
        recipeState={recipeState}
        recipeSetters={recipeSetters}
      />
    </RecipeCardContainer>
  );
}

type CreateRecipeHeadTypes = {
  submitRecipeCheck: Function;
  closeHandler: Function;
};

function CreateRecipeHead({
  submitRecipeCheck,
  closeHandler,
}: CreateRecipeHeadTypes) {
  return (
    <RecipeCardHead propsClassName={styles["new-recipe-head"]}>
      <div className={styles["header-center-wrapper"]}>
        <GeneralHeading
          icon={<CreateRecipeIcon />}
          heading={"add new recipe"}
        />
        <SquareButton
          propsClassName={styles["submit-button"]}
          buttonText="submit"
          propsOnClick={submitRecipeCheck}
        />
      </div>
      <CloseButton
        propsClassName={styles["close-button"]}
        propsOnClick={() => {
          closeHandler();
        }}
      />
    </RecipeCardHead>
  );
}

type CreateRecipeBodyTypes = {
  recipeState: any;
  recipeSetters: any;
};

function CreateRecipeBody({
  recipeState,
  recipeSetters,
}: CreateRecipeBodyTypes) {
  return (
    <RecipeCardBody propsClassName={styles["body"]}>
      <CreateRecipeOverview
        moduleConfig={{
          recipeData: recipeState.overview,
          setRecipeData: recipeSetters.setOverview,
          moduleId: "overview",
        }}
      />
      <CreateRecipeStandard
        moduleConfig={{
          recipeData: recipeState.ingredients,
          setRecipeData: recipeSetters.setIngredients,
          moduleId: "ingredients",
          label: "ingredient",
        }}
      />
      <CreateRecipeStandard
        moduleConfig={{
          recipeData: recipeState.steps,
          setRecipeData: recipeSetters.setSteps,
          moduleId: "steps",
          label: "step",
        }}
      />
      <CreateRecipeStandard
        moduleConfig={{
          recipeData: recipeState.tips,
          setRecipeData: recipeSetters.setTips,
          moduleId: "tips",
          label: "tip",
        }}
      />
      <CreateRecipeStandard
        moduleConfig={{
          recipeData: recipeState.tags,
          setRecipeData: recipeSetters.setTags,
          moduleId: "tags",
          label: "tag",
        }}
      />
    </RecipeCardBody>
  );
}

export { CreateRecipe };
