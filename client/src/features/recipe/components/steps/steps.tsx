import React from "react";
import styles from "./_steps.module.scss";
import {
  CardBody,
  CardHead,
  Card,
} from "common/components/cards/recipe-card/ui/card";
import { GeneralHeading } from "common/components/general-heading";
import { ReactComponent as StepsIcon } from "assets/icons/shoe-prints-light.svg";
import { TypeRecipe } from "common/types/common-types";

type Props = {
  recipe: TypeRecipe;
};

function Steps({ recipe }: Props) {
  return (
    <Card propsClassName={styles["steps-card"]}>
      <CardHead small propsClassName={styles["steps-card-head"]}>
        <GeneralHeading small heading="steps" icon={<StepsIcon />} />
      </CardHead>
      <CardBody propsClassName={styles["steps-body"]}>
        <div className={styles["steps-container"]}>
          {recipe.steps.map((step, index) => {
            return (
              <div className={styles["step-container"]}>
                <div className={styles["step-number"]}>{index + 1}</div>
                <div className={styles["step-text"]}>{step}</div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

export { Steps };
