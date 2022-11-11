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
  vegetarian: boolean;
  vegan: boolean;
  link: string;
};

type Ingredients = {
  vegetables: ((string | number)[] | (string | null)[])[];
  herbsAndSpices: ((string | number)[] | (string | null)[])[];
  carbohydrates: (string | number)[][];
  other: ((string | number)[] | (string | null)[])[];
};
