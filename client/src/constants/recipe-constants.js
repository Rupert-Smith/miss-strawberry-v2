import ukFlag from "../assets/images/flags/uk.png";
import japanFlag from "../assets/images/flags/japan.png";
import chinaFlag from "../assets/images/flags/china.png";
import franceFlag from "../assets/images/flags/france.png";
import indiaFlag from "../assets/images/flags/india.png";
import italyFlag from "../assets/images/flags/italy.png";
import mexicoFlag from "../assets/images/flags/mexico.png";
import spainFlag from "../assets/images/flags/spain.png";
import thailandFlag from "../assets/images/flags/thailand.png";
import usaFlag from "../assets/images/flags/usa.png";
import worldFlag from "../assets/images/flags/world3.png";

export const countries = [
  { value: "uk", label: "uk", image: ukFlag },
  { value: "japan", label: "japan", image: japanFlag },
  { value: "china", label: "china", image: chinaFlag },
  { value: "france", label: "france", image: franceFlag },
  { value: "india", label: "india", image: indiaFlag },
  { value: "italy", label: "italy", image: italyFlag },
  { value: "mexico", label: "mexico", image: mexicoFlag },
  { value: "spain", label: "spain", image: spainFlag },
  { value: "thailand", label: "thailand", image: thailandFlag },
  { value: "usa", label: "usa", image: usaFlag },
  { value: "world", label: "world", image: worldFlag },
];

export const directories = [
  {
    value: "breakfast",
    label: "breakfast",
    subdirectory: [
      { value: "pancakes", label: "pancakes" },
      { value: "eggs", label: "eggs" },
    ],
  },
  {
    value: "desserts",
    label: "desserts",
    subdirectory: [
      { value: "cake", label: "cake" },
      { value: "icecream", label: "icecream" },
      { value: "muffins", label: "muffins" },
    ],
  },
  {
    value: "drinks",
    label: "drinks",
    subdirectory: [
      { value: "alcohol", label: "alcohol" },
      { value: "softDrinks", label: "soft drinks" },
      { value: "dairy", label: "dairy" },
    ],
  },
  {
    value: "lightMeals",
    label: "light meals",
    subdirectory: [
      { value: "onigiri", label: "onigiri" },
      { value: "soup", label: "soup" },
    ],
  },
  {
    value: "mains",
    label: "mains",
    subdirectory: [
      { value: "fish", label: "fish" },
      { value: "meat", label: "meat" },
      { value: "pizza", label: "pizza" },
      { value: "pasta", label: "pasta" },
    ],
  },
  {
    value: "snacks",
    label: "snacks",
    subdirectory: [{ value: "bread", label: "bread" }],
  },
  {
    value: "tricks",
    label: "tricks",
    subdirectory: [
      { value: "vegetables", label: "vegetables" },
      { value: "dough", label: "dough" },
      { value: "fish", label: "fish" },
    ],
  },
];

export const categories = [
  // { value: null, label: "" },
  { value: "fruitVeg", label: "vegetables/fruit" },
  { value: "herbsSpices", label: "herbs/spices" },
  { value: "meatFish", label: "meat/fish" },
  { value: "nutsDried", label: "nuts/dried" },
  { value: "dairy", label: "dairy" },
  { value: "frozen", label: "frozen" },
  { value: "carbohydrates", label: "carbohydrates" },
  { value: "tinnedGoods", label: "tinned" },
  { value: "saucesOil", label: "sauces/oil" },
  { value: "sweetsChocolate", label: "sweets/chocolate" },
  { value: "drinks", label: "drinks" },
  { value: "other", label: "other" },
];

export const units = [
  // { value: null, label: "" },
  { value: "grams", label: "grams" },
  { value: "millilitres", label: "millilitres" },
  { value: "packets", label: "packets" },
  { value: "baskets", label: "baskets" },
  { value: "loaves", label: "loaves" },
  { value: "tins", label: "tins" },
  { value: "boxes", label: "boxes" },
  { value: "containers", label: "containers" },
  { value: "pots", label: "pots" },
  { value: "cups", label: "cups" },
];

directories.forEach((directory) => {
  directory.subdirectory.push({ value: "other", label: "other" });
});

export const noRecipeSteps =
  "Uh oh, looks like there are no recipe instructions! How are we supposed to make this meal? Maybe put the strawberries in the microwave?";
