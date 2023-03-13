export interface TypeRecipe {
  _id: string;
  meta: { favourite: boolean };
  overview: Overview;
  ingredients: Ingredients[];
  steps: Block[] | [];
  tips: Block[] | [];
  tags: Block[] | [];
}

type Overview = {
  title: string;
  image: string;
  cookingTime: string;
  price: number | null;
  rating: number | null;
  country: string;
  servings: number | null;
  vegetarian: boolean | null;
  vegan: boolean | null;
  source: { type: string; value: string };
};

// type Ingredient = (
//   | (string | number)[]
//   | (string | null)[]
//   | (string | null | number)[]
// )[];

type Ingredient = {};

type Ingredients = {
  fruitVeg: Ingredient | null;
  dairy: Ingredient | null;
  frozen: Ingredient | null;
  nutsDried: Ingredient | null;
  saucesOil: Ingredient | null;
  sweetsChocolate: Ingredient | null;
  meatFish: Ingredient | null;
  tinnedGoods: Ingredient | null;
  herbsSpices: Ingredient | null;
  carbohydrates: Ingredient | null;
  other: Ingredient | null;
};

export type Block = {
  blockData: string[];
};
