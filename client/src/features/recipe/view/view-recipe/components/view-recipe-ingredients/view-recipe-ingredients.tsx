import React from "react";
import styles from "./_view-recipe-ingredients.module.scss";
import { TypeRecipe } from "common/types/common-types";
import { categoryMap } from "./helpers/category-map";
import { RecipeModule } from "features/recipe/components/recipe-module";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { formatIngredients } from "./helpers/format-ingredients";

type Props = {
  recipe: TypeRecipe;
};

function ViewRecipeIngredients({ recipe }: Props) {
  const viewModulesCondition = useSelector(
    (state: RootState) => state.recipeLayout.viewModulesCondition
  );

  const ingredientsReformatted = formatIngredients(recipe.ingredients);

  return (
    <RecipeModule
      state="view"
      propsClassName={`${styles["ingredients-container"]} ${
        viewModulesCondition.steps && styles["full-width"]
      }`}
      moduleId="ingredients"
      shrink
    >
      {ingredientsReformatted.map((reformattedIngredient) => {
        return (
          <ul className={styles["ingredients-list-container"]}>
            <div className={styles["category-heading"]}>
              {categoryMap(reformattedIngredient.category)}
            </div>
            {reformattedIngredient.ingredients.map((ingredient) => {
              const amount = ingredient.amount;
              const unit = ingredient.unit;
              const food = ingredient.ingredient;

              let finalIngredientString = food;

              if (amount) {
                finalIngredientString = `${amount} ${food}`;
              }
              if (amount && unit) {
                finalIngredientString = `${amount} ${unit} ${food}`;
              }

              return (
                <li>
                  <div>{finalIngredientString}</div>
                </li>
              );
            })}
          </ul>
        );
      })}
    </RecipeModule>
  );
}

export { ViewRecipeIngredients };
