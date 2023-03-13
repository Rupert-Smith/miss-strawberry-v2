import {
  AddToCartButton,
  EditRecipeButton,
  AddToFavouritesButton,
} from "common/components/buttons/action-buttons/core-action-buttons";
import styles from "./_action-buttons-block.module.scss";
import useCoreActionButtons from "../../../../features/favourites/hooks/use-add-to-favourites";
import { useRef } from "react";

type ActionButtonsBlockTypes = {
  setHoveredElement: Function;
  recipeId: string;
  favourite: boolean;
  propsRef?: any;
};

function ActionButtonsBlock({
  propsRef,
  setHoveredElement,
  recipeId,
  favourite,
}: ActionButtonsBlockTypes) {
  return (
    <div
      ref={propsRef}
      className={`${styles["action-buttons"]} ${styles["action-buttons-long"]}`}
    >
      {/* <AddToCartButton
        onMouseEnter={() => {
          setHoveredElement('addToCart');
        }}
        onMouseLeave={() => {
          setHoveredElement('card');
        }}
      /> */}
      <AddToFavouritesButton
        recipeId={recipeId}
        favourite={favourite}
        onMouseEnter={() => {
          setHoveredElement("addToFavourites");
        }}
        onMouseLeave={() => {
          setHoveredElement("card");
        }}
      />
      {/* <EditRecipeButton
        onMouseEnter={() => {
          setHoveredElement('editRecipe');
        }}
        onMouseLeave={() => {
          setHoveredElement('card');
        }}
      /> */}
    </div>
  );
}

export { ActionButtonsBlock };
