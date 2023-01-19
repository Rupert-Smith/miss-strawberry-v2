import React from "react";
import styles from "./_tags.module.scss";
import {
  CardBody,
  CardHead,
  Card,
} from "common/components/cards/recipe-card/ui/card";
import { GeneralHeading } from "common/components/general-heading";
import { ReactComponent as TagsIcon } from "assets/icons/tag-light.svg";
import { TypeRecipe } from "common/types/common-types";

type Props = {
  recipe: TypeRecipe;
};

export default function Tags({ recipe }: Props) {
  return (
    <Card propsClassName={styles["tags-container"]}>
      <CardHead small propsClassName={styles["tags-card-head"]}>
        <GeneralHeading small heading="tags" icon={<TagsIcon />} />
      </CardHead>
      <CardBody>
        {recipe.tags.map((tag) => {
          return <div className={styles["tag"]}>{tag}</div>;
        })}
      </CardBody>
    </Card>
  );
}

export { Tags };
