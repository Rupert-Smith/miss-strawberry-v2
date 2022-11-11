import {
  AddToCartButton,
  EditRecipeButton,
  AddToFavouritesButton,
} from "components/action-buttons/core-action-buttons";
import styles from "./_action-buttons.module.scss";

type ActionButtonsTypes = {
  setHoveredElement: Function;
};

function ActionButtons({ setHoveredElement }: ActionButtonsTypes) {
  return (
    <div
      className={`${styles["action-buttons"]} ${styles["action-buttons-long"]}`}
    >
      <AddToCartButton
        onMouseEnter={() => {
          setHoveredElement("addToCart");
        }}
        onMouseLeave={() => {
          setHoveredElement("card");
        }}
      />
      <AddToFavouritesButton
        onMouseEnter={() => {
          setHoveredElement("addToFavourites");
        }}
        onMouseLeave={() => {
          setHoveredElement("card");
        }}
      />
      <EditRecipeButton
        onMouseEnter={() => {
          setHoveredElement("editRecipe");
        }}
        onMouseLeave={() => {
          setHoveredElement("card");
        }}
      />
    </div>
  );
}

export { ActionButtons };
