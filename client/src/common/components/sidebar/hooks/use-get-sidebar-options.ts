import heartIcon from "assets/images/sidebar/heart.png";
import breakfastIcon from "assets/images/sidebar/breakfast.png";
import dessertIcon from "assets/images/sidebar/dessert.png";
import drinksIcon from "assets/images/sidebar/drinks.png";
import lightMealsIcon from "assets/images/sidebar/light-meals.png";
import mainsIcon from "assets/images/sidebar/mains.png";
import snacksIcon from "assets/images/sidebar/snacks.png";
import tricksIcon from "assets/images/sidebar/tricks.png";
import useGetResults from "features/results/hooks/use-get-results";

export default function useGetSidebarOptions() {
  const { handleGetFavourites, handleGetRootDirectory } = useGetResults();

  const specialSidebarOptions = [
    {
      button: heartIcon,
      buttonStyles: "pink-button",
      iconStyles: { height: ".73em", width: ".8em", marginTop: ".1em" },
      label: "favourites",
      onClick: () => {
        handleGetFavourites();
      },
    },
  ];

  const sidebarOptions = [
    {
      id: "breakfast",
      button: breakfastIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1.2em", marginTop: ".05em" },
      label: "breakfast",
      onClick: () => {
        handleGetRootDirectory("breakfast");
      },
    },
    {
      id: "desserts",
      button: dessertIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: ".95em" },
      label: "desserts",
      onClick: () => {
        handleGetRootDirectory("desserts");
      },
    },
    {
      id: "drinks",
      button: drinksIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1em", marginLeft: ".1em" },
      label: "drinks",
      onClick: () => {
        handleGetRootDirectory("drinks");
      },
    },
    {
      id: "lightMeals",
      button: lightMealsIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1em" },
      label: "light meals",
      onClick: () => {
        handleGetRootDirectory("lightMeals");
      },
    },
    {
      id: "mains",
      button: mainsIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1em" },
      label: "mains",
      onClick: () => {
        handleGetRootDirectory("mains");
      },
    },
    {
      id: "snacks",
      button: snacksIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1em" },
      label: "snacks",
      onClick: () => {
        handleGetRootDirectory("snacks");
      },
    },
    {
      id: "tricks",
      button: tricksIcon,
      buttonStyles: "yellow-button",
      iconStyles: { height: "1em", width: "1em" },
      label: "tricks",
      onClick: () => {
        handleGetRootDirectory("tricks");
      },
    },
  ];

  return { specialSidebarOptions, sidebarOptions };
}
