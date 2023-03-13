import React from "react";
import styles from "./_view-recipe-tags.module.scss";
import { TypeRecipe } from "common/types/common-types";
import { RecipeModule } from "features/recipe/components/recipe-module";

type ViewRecipeTagsProps = {
  recipe: TypeRecipe;
};

export default function ViewRecipeTags({ recipe }: ViewRecipeTagsProps) {
  return (
    <RecipeModule state="view" shrink moduleId="tags">
      <div className={styles["tags-container"]}>
        {" "}
        {recipe.tags.map((tag) => {
          return <div className={styles["tag"]}>{tag.blockData}</div>;
        })}
      </div>
    </RecipeModule>
  );
}

export { ViewRecipeTags };
