import heartIcon from "assets/images/sidebar/heart.png";
import breakfastIcon from "assets/images/sidebar/breakfast.png";
import dessertIcon from "assets/images/sidebar/dessert.png";
import drinksIcon from "assets/images/sidebar/drinks.png";
import lightMealsIcon from "assets/images/sidebar/light-meals.png";
import mainsIcon from "assets/images/sidebar/mains.png";
import snacksIcon from "assets/images/sidebar/snacks.png";
import tricksIcon from "assets/images/sidebar/tricks.png";

export const specialSidebarOptions = [
  {
    button: heartIcon,
    buttonStyles: "pink-button",
    iconStyles: { height: ".73em", width: ".8em", marginTop: ".1em" },
    label: "favourites",
  },
];

export const sidebarOptions = [
  {
    button: breakfastIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1.2em", marginTop: ".05em" },
    label: "breakfast",
  },
  {
    button: dessertIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: ".95em" },
    label: "desserts",
  },
  {
    button: drinksIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1em", marginLeft: ".1em" },
    label: "drinks",
  },
  {
    button: lightMealsIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1em" },
    label: "light meals",
  },
  {
    button: mainsIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1em" },
    label: "mains",
  },
  {
    button: snacksIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1em" },
    label: "snacks",
  },
  {
    button: tricksIcon,
    buttonStyles: "yellow-button",
    iconStyles: { height: "1em", width: "1em" },
    label: "tricks",
  },
];
