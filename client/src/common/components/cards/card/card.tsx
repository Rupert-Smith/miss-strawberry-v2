import { ReactNode } from "react";
import styles from "./_card.module.scss";
type CardProps = {
  children?: ReactNode;
  propsClassName?: string;
  ref?: any;
  propsOnClick?: Function;
};

function Card({ children, propsClassName, propsOnClick }: CardProps) {
  return (
    <div
      onClick={() => {
        propsOnClick && propsOnClick();
      }}
      className={`${styles["card"]} ${propsClassName}`}
    >
      {children}
    </div>
  );
}

type CardHeadProps = {
  children?: ReactNode;
  propsClassName?: string;
  small?: boolean;
  propsOnMouseOut?: any;
  propsOnMouseOver?: any;
  propsOnClick?: Function;
};

function CardHead({
  small,
  children,
  propsClassName,
  propsOnClick,
  propsOnMouseOut,
  propsOnMouseOver,
}: CardHeadProps) {
  return (
    <div
      onMouseOut={propsOnMouseOut}
      onMouseOver={propsOnMouseOver}
      onClick={() => {
        if (propsOnClick) {
          propsOnClick();
        }
      }}
      className={`${
        small ? styles["card-head-small"] : styles["card-head-big"]
      } ${styles["card-head"]} ${propsClassName}`}
    >
      {children}
    </div>
  );
}

type CardBodyProps = {
  children?: ReactNode;
  propsClassName?: string;
  ref?: any;
};

function CardBody({ ref, children, propsClassName }: CardBodyProps) {
  return (
    <div ref={ref} className={`${styles["card-body"]} ${propsClassName}`}>
      {children}
    </div>
  );
}

export { CardBody, CardHead, Card };
