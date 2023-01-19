import { ReactNode } from "react";
import styles from "./_card.module.scss";
type CardProps = {
  children?: ReactNode;
  propsClassName?: string;
  ref?: any;
};

function Card({ children, propsClassName }: CardProps) {
  return (
    <div className={`${styles["recipe-container"]} ${propsClassName}`}>
      {children}
    </div>
  );
}

type CardHeadProps = {
  children?: ReactNode;
  propsClassName?: string;
  small?: boolean;
};

function CardHead({ small, children, propsClassName }: CardHeadProps) {
  return (
    <div
      className={`${
        small ? styles["recipe-head-small"] : styles["recipe-head-big"]
      } ${styles["recipe-head"]} ${propsClassName}`}
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
    <div ref={ref} className={`${styles["recipe-body"]} ${propsClassName}`}>
      {children}
    </div>
  );
}

export { CardBody, CardHead, Card };
