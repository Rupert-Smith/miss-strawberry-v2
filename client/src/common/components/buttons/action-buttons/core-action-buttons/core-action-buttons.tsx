import React, { ReactNode } from "react";
import styles from "./_core-action-buttons.module.scss";
import { ActionButtonShell } from "common/components/buttons/action-buttons/ui/action-button-shell";
import { ReactComponent as CartIcon } from "assets/icons/cart-shopping-light.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash-can-light.svg";
import { ReactComponent as EditIcon } from "assets/icons/pen-light.svg";
import HeartIcon from "assets/images/sidebar/heart.png";
import useCoreActionButtons from "../../../../../features/favourites/hooks/use-add-to-favourites";

type actionButtonType = {
  onMouseEnter?: any;
  onMouseLeave?: any;
  className?: ReactNode;
  small?: boolean;
};

export function DeleteRecipeButton({
  small,
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      small={small}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["delete-recipe"]}
      propsOnClick={() => {}}
    >
      <TrashIcon />
    </ActionButtonShell>
  );
}

export function AddToCartButton({
  small,
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      small={small}
      propsOnClick={() => {}}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["add-to-cart"]}
    >
      <CartIcon />
    </ActionButtonShell>
  );
}

type favouriteButtonType = {
  onMouseEnter?: any;
  onMouseLeave?: any;
  className?: ReactNode;
  small?: boolean;
  recipeId: string;
  favourite: boolean;
};

export function AddToFavouritesButton({
  small,
  onMouseEnter,
  onMouseLeave,
  recipeId,
  favourite,
}: favouriteButtonType) {
  const { handleToggleFavourites } = useCoreActionButtons();

  return (
    <ActionButtonShell
      small={small}
      propsOnClick={() => {
        handleToggleFavourites(recipeId, !favourite);
      }}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`${favourite ? styles["favourite"] : styles["not-favourite"]}`}
    >
      <img src={HeartIcon} alt="Favourites" />
    </ActionButtonShell>
  );
}

export function EditRecipeButton({
  small,
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      small={small}
      propsOnClick={() => {}}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["edit-recipe-button"]}
    >
      <EditIcon />
    </ActionButtonShell>
  );
}
