import {
  DEFAULT_NEW_BLOCK_DATA,
  NEW_INGREDIENT_BLOCK_DATA,
} from "../constants/module.defaults";

export default function useUpdateRecipe(
  recipeData: any,
  setRecipeData: any,
  moduleId: string
) {
  let updatedBlocks = [...recipeData];

  const findIndex = (id: Number) => {
    const respectiveBlockIndex = recipeData.findIndex(
      (block: any) => block.id === id
    );
    return respectiveBlockIndex;
  };

  const updateBlockContent = (updatedContent: string | {}, id: Number) => {
    const respectiveBlockIndex = findIndex(id);
    updatedBlocks[respectiveBlockIndex].blockData = updatedContent;
    setRecipeData(updatedBlocks);
  };

  const removeBlock = (id: Number) => {
    const respectiveBlockIndex = findIndex(id);
    updatedBlocks.splice(respectiveBlockIndex, 1);
    updatedBlocks.forEach((block, index) => {
      block.id = index;
    });
    setRecipeData(updatedBlocks);
  };

  const addBlock = () => {
    if (moduleId !== "ingredients") {
      updatedBlocks.push({
        id: updatedBlocks.length + 1,
        blockData: DEFAULT_NEW_BLOCK_DATA,
      });
    }
    if (moduleId === "ingredients") {
      updatedBlocks.push({
        id: updatedBlocks.length + 1,
        blockData: NEW_INGREDIENT_BLOCK_DATA,
      });
    }
    setRecipeData(updatedBlocks);
  };

  return { updateBlockContent, removeBlock, addBlock };
}
