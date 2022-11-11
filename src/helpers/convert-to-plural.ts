export const convertToPlural = (
  singularString: string,
  value: number | null
) => {
  let convertedString = singularString;

  if (value && value > 1) {
    convertedString = `${singularString}s`;
  }

  return convertedString;
};
