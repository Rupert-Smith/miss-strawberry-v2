import React from "react";
import styles from "./_add-new-block-button.module.scss";
import { Card } from "common/components/cards/card";
import { ReactComponent as PlusIcon } from "assets/icons/circle-plus-light.svg";

type AddNewBlockButtonProps = {
  label: string;
  propsOnClick: Function;
};

function AddNewBlockButton({ label, propsOnClick }: AddNewBlockButtonProps) {
  return (
    <Card propsOnClick={propsOnClick} propsClassName={styles["add-new-button"]}>
      {`add new ${label}`}
      <PlusIcon />
    </Card>
  );
}

export { AddNewBlockButton };
