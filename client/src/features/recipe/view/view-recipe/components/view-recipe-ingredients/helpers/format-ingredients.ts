import { categories } from "constants/recipe-constants";

export const formatIngredients = (unformattedIngredients: any) => {
  type ReformattedIngredient = { category: "" | null; ingredients: any[] }[];

  let ingredientsReformatted: ReformattedIngredient = [];

  // the ingredients are coming in unsorted. We need to group them by category

  // FROM: [{ blockData: {ingredient: 'another thing ', amount: 1, unit: 'loaves', category: 'herbsSpices'}id: "2"}]
  // TO: [{category: "herbsSpices" ingredients: [{ingredient: 'another thing ', amount: 1, unit: 'loaves', category: 'herbsSpices'}]]

  unformattedIngredients.forEach((ingredient: any, index: number) => {
    // start by pushing the first ingredient to the array in the new format, the order doesn't matter at this point

    if (index === 0) {
      ingredientsReformatted.push({
        category: ingredient.blockData.category || "other",
        ingredients: [ingredient.blockData],
      });
      return;
    }

    // from here we begin formatting the ingredients one by one
    if (index > 0) {
      addToReformatted(ingredient.blockData);
    }
  });

  function addToReformatted(ingredient: any) {
    let addNewCategory = true;

    ingredientsReformatted.forEach((reformattedIngredient) => {
      // we only want to create a new category, if after looping through the ingredientsReformatted array,  we find that the category doesn't already exist
      if (reformattedIngredient.category === ingredient.category) {
        addNewCategory = false;
        reformattedIngredient.ingredients.push(ingredient);
      }
    });
    if (addNewCategory) {
      ingredientsReformatted.push({
        category: ingredient.category,
        ingredients: [ingredient],
      });
    }
  }

  reOrder(ingredientsReformatted);

  function reOrder(ingredientsReformattedArray: any) {
    return ingredientsReformattedArray.sort(function (
      ingredientA: any,
      ingredientB: any
    ) {
      return sortIt(ingredientA.category, ingredientB.category);
    });

    function sortIt(ingredientA: string | null, ingredientB: string | null) {
      function returnIndex(ingredient: string | null) {
        const ingredientUpdated = ingredient === null ? "other" : ingredient;

        return categories
          .map(function (category) {
            return category.value;
          })
          .indexOf(ingredientUpdated);
      }

      const indexA = returnIndex(ingredientA);
      const indexB = returnIndex(ingredientB);

      if (indexA > indexB) {
        return 1;
      }
      if (indexA < indexB) {
        return -1;
      }
      return 0;
    }
  }

  return ingredientsReformatted;
};
