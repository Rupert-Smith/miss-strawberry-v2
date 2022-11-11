import React, { ReactNode } from "react";
import styles from "./_core-action-buttons.module.scss";
import { ActionButtonShell } from "components/action-buttons/ui/action-button-shell";
import { ReactComponent as CartIcon } from "assets/icons/cart-shopping-light.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash-can-light.svg";
import { ReactComponent as EditIcon } from "assets/icons/pen-light.svg";
import HeartIcon from "assets/images/sidebar/heart.png";

type actionButtonType = {
  onMouseEnter: any;
  onMouseLeave: any;
  className?: ReactNode;
};

export function DeleteRecipeButton({
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["delete-recipe"]}
    >
      <TrashIcon />
    </ActionButtonShell>
  );
}

export function AddToCartButton({
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["add-to-cart"]}
    >
      <CartIcon />
    </ActionButtonShell>
  );
}

export function AddToFavouritesButton({
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["add-to-favourites"]}
    >
      <img src={HeartIcon} alt="Favourites" />
    </ActionButtonShell>
  );
}

export function EditRecipeButton({
  onMouseEnter,
  onMouseLeave,
}: actionButtonType) {
  return (
    <ActionButtonShell
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={styles["edit-recipe-button"]}
    >
      <EditIcon />
    </ActionButtonShell>
  );
}
