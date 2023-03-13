import React from "react";
import styles from "./_view-recipe-steps.module.scss";
import { TypeRecipe } from "common/types/common-types";
import { RecipeModule } from "features/recipe/components/recipe-module";

type ViewRecipeStepsProps = {
  recipe: TypeRecipe;
};

function ViewRecipeSteps({ recipe }: ViewRecipeStepsProps) {
  return (
    <RecipeModule
      state="view"
      propsClassName={styles["steps-container"]}
      shrink
      moduleId="steps"
    >
      {/* <div className={styles["steps-body"]}> */}
      <div className={styles["steps-body"]}>
        {recipe.steps.map((step, index) => {
          return (
            <div className={styles["step-instructions"]}>
              <div className={styles["step-number"]}>{index + 1}</div>
              <div className={styles["step-text"]}>{step.blockData}</div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </RecipeModule>
  );
}

export { ViewRecipeSteps };
