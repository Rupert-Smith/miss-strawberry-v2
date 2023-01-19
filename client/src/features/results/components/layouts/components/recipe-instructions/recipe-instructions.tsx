import { recipeInstructionsPreview } from "common/helpers/recipe-instructions-preview";

type ResultsCardTypes = {
  steps: string[];
};

function RecipeInstructions({ steps }: ResultsCardTypes) {
  return <>{recipeInstructionsPreview(steps)}</>;
}

export { RecipeInstructions };
