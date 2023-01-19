import React from "react";
import styles from "./_ingredients.module.scss";
import {
  CardBody,
  CardHead,
  Card,
} from "common/components/cards/recipe-card/ui/card";
import { GeneralHeading } from "common/components/general-heading";
import { ReactComponent as IngredientsIcon } from "assets/icons/strawberry-light.svg";
import { TypeRecipe } from "common/types/common-types";
import { categoryMap } from "./helpers/category-map";

type Props = {
  recipe: TypeRecipe;
};

function Ingredients({ recipe }: Props) {
  const ingredientsList = [];

  for (const category in recipe.ingredients) {
    const categoryIngredients =
      recipe.ingredients[category as keyof typeof recipe.ingredients];

    ingredientsList.push(
      <ul className={styles["ingredients-list-container"]}>
        <div className={styles["category-heading"]}>
          {categoryMap(category)}
        </div>
        {categoryIngredients.map((ingredient) => {
          const amount = ingredient[0];
          const metric = ingredient[1];
          const food = ingredient[2];

          let finalIngredientString = food;

          if (amount) {
            finalIngredientString = `${amount} ${food}`;
          }
          if (amount && metric) {
            finalIngredientString = `${amount}${metric} ${food}`;
          }

          return (
            <li>
              <div>{finalIngredientString}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <Card propsClassName={styles["ingredients-card"]}>
      <CardHead small propsClassName={styles["ingredients-card-head"]}>
        <GeneralHeading
          small
          heading="ingredients"
          icon={<IngredientsIcon />}
        />
      </CardHead>
      <CardBody propsClassName={styles["ingredients-body"]}>
        <div>
          {ingredientsList.map((categoryGroup) => {
            return categoryGroup;
          })}
        </div>
      </CardBody>
    </Card>
  );
}

export { Ingredients };
