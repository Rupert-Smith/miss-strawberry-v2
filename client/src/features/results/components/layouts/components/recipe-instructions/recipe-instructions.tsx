import { recipeInstructionsPreviewGenerator } from 'common/helpers/recipe-instructions-preview-generator';
import { noRecipeSteps } from 'constants/recipe-constants';
import { Block } from 'common/types/common-types';

type ResultsCardTypes = {
  steps: Block[];
};

function RecipeInstructions({ steps }: ResultsCardTypes) {
  const recipeInstructionsPreview =
    steps.length > 0
      ? recipeInstructionsPreviewGenerator(steps)
      : noRecipeSteps;

  return <>{recipeInstructionsPreview}</>;
}

export { RecipeInstructions };
