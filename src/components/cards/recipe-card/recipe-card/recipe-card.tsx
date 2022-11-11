import { ReactNode } from "react";
import styles from "./_recipe-card.module.scss";

type RecipeCardBodyProps = {
  children?: ReactNode;
};

function RecipeCardContainer({ children }: RecipeCardBodyProps) {
  return <div className={styles["recipe-container"]}>{children}</div>;
}

function RecipeCardBody({ children }: RecipeCardBodyProps) {
  return <div className={styles["recipe-body"]}>{children}</div>;
}

type RecipeCardHeadProps = {
  children?: ReactNode;
};

function RecipeCardHead({ children }: RecipeCardHeadProps) {
  return <div className={styles["recipe-head"]}>{children}</div>;
}

export { RecipeCardBody, RecipeCardHead, RecipeCardContainer };
