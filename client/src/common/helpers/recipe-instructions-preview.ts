export const recipeInstructionsPreview = (instructions: string[]) => {
  let concatenatedInstructions = "";

  // We use a set number of characters to make styling easier

  const SET_NUMBER_OF_CHARACTERS = 360;

  let sentenceEndingCharacters = /[!,.?]+/;

  instructions.forEach((instruction) => {
    // Here we are joining the sentences together with a full stop UNLESS there is already a full stop present.

    if (concatenatedInstructions.length > 200) {
      return;
    }
    const finalCharacter = instruction.slice(-1);
    let currentInstruction = instruction;

    if (!sentenceEndingCharacters.test(finalCharacter)) {
      currentInstruction = instruction + ". ";
    }
    if (sentenceEndingCharacters.test(finalCharacter)) {
      currentInstruction = instruction + " ";
    }
    concatenatedInstructions = concatenatedInstructions + currentInstruction;
  });

  const remainingCharacters =
    SET_NUMBER_OF_CHARACTERS - concatenatedInstructions.length;

  const emptySpace = " ".repeat(remainingCharacters);

  concatenatedInstructions = concatenatedInstructions + emptySpace;

  return concatenatedInstructions;
};
