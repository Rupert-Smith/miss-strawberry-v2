import { Block } from "common/types/common-types";

export const recipeInstructionsPreviewGenerator = (instructions: Block[]) => {
  let concatenatedInstructions = "";

  // // We use a set number of characters to make styling easier

  const SET_NUMBER_OF_CHARACTERS = 360;

  let sentenceEndingCharacters = /[!,.?]+/;

  instructions.forEach((instruction) => {
    const text = instruction.blockData + "";

    // Here we are joining the sentences together with a full stop UNLESS there is already a full stop present.

    if (concatenatedInstructions.length > 200) {
      return;
    }
    const finalCharacter = text.slice(-1);
    let currentInstruction = text;

    if (!sentenceEndingCharacters.test(finalCharacter)) {
      currentInstruction = text + ". ";
    }
    if (sentenceEndingCharacters.test(finalCharacter)) {
      currentInstruction = text + " ";
    }
    concatenatedInstructions = concatenatedInstructions + currentInstruction;
  });

  const remainingCharacters =
    SET_NUMBER_OF_CHARACTERS - concatenatedInstructions.length;

  const emptySpace = " ".repeat(remainingCharacters);

  concatenatedInstructions = concatenatedInstructions + emptySpace;

  return concatenatedInstructions;
};
