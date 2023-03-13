export const convertToPlural = (
  singularString: string,
  value: number | null
) => {
  let convertedString = singularString;

  if ((value && value > 1) || value === 0) {
    convertedString = `${singularString}s`;
  }

  return convertedString;
};
