import React from "react";
import styles from "./_tips.module.scss";
import {
  CardBody,
  CardHead,
  Card,
} from "common/components/cards/recipe-card/ui/card";
import { GeneralHeading } from "common/components/general-heading";
import { ReactComponent as TipsIcon } from "assets/icons/lightbulb-on-light.svg";
import { TypeRecipe } from "common/types/common-types";

type Props = {
  recipe: TypeRecipe;
};

export default function Tips({ recipe }: Props) {
  return (
    <Card>
      <CardHead small propsClassName={styles["tips-card-head"]}>
        <GeneralHeading small heading="tips" icon={<TipsIcon />} />
      </CardHead>
      <CardBody propsClassName={styles["tips-body"]}>
        {recipe.tips.map((tip) => {
          return (
            <div className={styles["tip-container"]}>
              <div className={styles["tip-list-lightbulb"]}>
                <TipsIcon />
              </div>
              <div className={styles["tip-list-text"]}>{tip}</div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

export { Tips };
