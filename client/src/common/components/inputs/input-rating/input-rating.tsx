import React, { ReactNode } from "react";
import styles from "./_input-rating.module.scss";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as EmptyStar } from "assets/icons/star-light.svg";
import { ReactComponent as FillStar } from "assets/icons/star-solid.svg";

type actionButtonType = {
  inputConfig?: any;
  propsClassName?: string;
  propsInitialValue: number | null;
  propsOnClick?: Function;
  read?: boolean;
};

export function InputRating({
  propsOnClick,
  propsClassName,
  read,
  propsInitialValue,
}: actionButtonType) {
  return (
    <Rating
      onClick={(value) => {
        propsOnClick && propsOnClick(value);
      }}
      readonly={read}
      initialValue={propsInitialValue || 0}
      size={50}
      className={propsClassName && propsClassName}
      emptyIcon={
        <EmptyStar className={`${styles["empty-star"]} ${styles["star"]}`} />
      }
      fillIcon={
        <FillStar className={`${styles["fill-star"]} ${styles["star"]}`} />
      }
    />
  );
}
