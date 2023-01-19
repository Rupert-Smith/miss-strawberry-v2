export interface TypeRecipe {
  overview: Overview;
  ingredients: Ingredients;
  steps: string[];
  tips: string[];
  tags: string[];
}

type Overview = {
  title: string;
  image: string;
  id: string;
  time: (number | null)[];
  price: number;
  rating: number;
  origin: string;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  source: { type: string; value: string };
};

type Ingredient = (
  | (string | number)[]
  | (string | null)[]
  | (string | null | number)[]
)[];

type Ingredients = {
  fruitVeg: Ingredient;
  dairy: Ingredient;
  frozen: Ingredient;
  nutsDried: Ingredient;
  saucesOil: Ingredient;
  sweetsChocolate: Ingredient;
  meatFish: Ingredient;
  tinnedGoods: Ingredient;
  herbsSpices: Ingredient;
  carbohydrates: Ingredient;
  other: Ingredient;
};

//  fruitVeg: [
//         [1, "", "onion"],
//         [2, "", "carrot"],
//         [null, "", "spinach"],
//         [1, "", "squash"],
//       ],
//       dairy: [[500, "g", "dairy"]],
//       frozen: [[500, "g", "frozen"]],
//       nutsDried: [[2, "g", "peanuts"]],
//       saucesOil: [[200, "ml", "oil"]],
//       sweetsChocolate: [[200, "ml", "oil"]],
//       meatFish: [[500, "g", "fish"]],
//       tinnedGoods: [[500, "g", "tinned tuna"]],
//       herbsSpices: [
//         [2, "", "basil"],
//         [null, "", "thyme"],
//         [null, "", "cumin seeds"],
//       ],
//       carbohydrates: [[2, "", "sweet potatoes"]],
//       other: [
//         [null, "", "vegetable stock"],
//         [500, "g", "vegetable stock"],
//       ],
