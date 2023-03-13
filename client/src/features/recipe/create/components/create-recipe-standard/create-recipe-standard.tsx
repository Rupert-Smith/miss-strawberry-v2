import { AddNewBlockButton } from "../buttons/add-new-block-button";
import { RecipeModule } from "features/recipe/components/recipe-module";
import { RecipeBlocks } from "../recipe-blocks";
import styles from "./_create-recipe-standard.module.scss";
import { ReactComponent as MehIcon } from "assets/icons/face-meh-light.svg";
import useUpdateRecipe from "../../hooks/use-update-recipe";

type CreateRecipeStandardTypes = {
  moduleConfig: any;
};

function CreateRecipeStandard({ moduleConfig }: CreateRecipeStandardTypes) {
  const { recipeData, setRecipeData, moduleId, label }: any = moduleConfig;

  const actions = useUpdateRecipe(recipeData, setRecipeData, moduleId);

  const AddNewBlockButtonAlias = (
    <AddNewBlockButton propsOnClick={actions.addBlock} label={label} />
  );

  return (
    <RecipeModule
      state="create"
      shrink
      moduleId={moduleId}
      propsClassName={styles["create-recipe-module-standard"]}
    >
      {recipeData.length === 0 ? (
        <div className={styles["no-blocks-container"]}>
          <div className={styles["no-blocks-text"]}>
            {`no ${label}s`}
            <MehIcon />
          </div>
          {AddNewBlockButtonAlias}
        </div>
      ) : (
        <>
          <RecipeBlocks
            label={label}
            blocks={recipeData}
            actions={actions}
            moduleId={moduleId}
          />
          <div className={styles["add-new-button-position-wrapper"]}>
            {AddNewBlockButtonAlias}
          </div>
        </>
      )}
    </RecipeModule>
  );
}

export { CreateRecipeStandard };
