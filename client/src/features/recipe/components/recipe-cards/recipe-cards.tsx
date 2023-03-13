import { ReactNode } from "react";
import styles from "./_recipe-cards.module.scss";
import { CardBody, CardHead, Card } from "common/components/cards/card";

type RecipeCardProps = {
  children?: ReactNode;
  propsClassName?: string;
};

function RecipeCardContainer({ children, propsClassName }: RecipeCardProps) {
  return (
    <Card propsClassName={`${styles["recipe-container"]} ${propsClassName}`}>
      {children}
    </Card>
  );
}

type RecipeCardHeadProps = {
  children?: ReactNode;
  propsClassName?: string;
};

function RecipeCardHead({ children, propsClassName }: RecipeCardHeadProps) {
  return (
    <CardHead propsClassName={`${styles["recipe-head"]} ${propsClassName}`}>
      {children}
    </CardHead>
  );
}

type RecipeCardBodyProps = {
  children?: ReactNode;
  propsClassName?: string;
  ref?: any;
};

function RecipeCardBody({
  children,
  propsClassName,
  ref,
}: RecipeCardBodyProps) {
  return (
    <CardBody
      ref={ref}
      propsClassName={`${styles["recipe-body"]} ${propsClassName}`}
    >
      {children}
    </CardBody>
  );
}

export { RecipeCardBody, RecipeCardHead, RecipeCardContainer };
