import React from "react";
import styles from "./_view-recipe-tips.module.scss";
import { ReactComponent as TipsIcon } from "assets/icons/lightbulb-on-light.svg";
import { TypeRecipe } from "common/types/common-types";
import { RecipeModule } from "features/recipe/components/recipe-module";

type ViewRecipeTipsProps = {
  recipe: TypeRecipe;
};

export default function ViewRecipeTips({ recipe }: ViewRecipeTipsProps) {
  return (
    <RecipeModule state="view" shrink moduleId="tips">
      <div className={`${styles["tips-body"]}`}>
        {recipe.tips.map((tip) => {
          return (
            <div className={styles["tip-container"]}>
              <div className={styles["tip-list-lightbulb"]}>
                <TipsIcon />
              </div>
              <div className={styles["tip-list-text"]}>{tip.blockData}</div>
            </div>
          );
        })}
      </div>
    </RecipeModule>
  );
}

export { ViewRecipeTips };
