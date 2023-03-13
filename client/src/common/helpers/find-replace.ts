export const findReplace = (
  originalString: string,
  stringReplacements: { find: string; replace: string }[]
) => {
  let cleanedString = originalString;

  // stringReplacements.forEach((stringreplacement) => {
  //   cleanedString = cleanedString.replaceAll(
  //     stringreplacement.find,
  //     stringreplacement.replace
  //   );
  // });

  return cleanedString;
};
