import styles from "./_results-card.module.scss";
import { ReactNode } from "react";

type ResultsCardTypes = {
  children?: ReactNode;
  setHoveredElement: Function;
  hoveredElement: string;
  propsClassName?: string;
};

function ResultsCard({
  children,
  setHoveredElement,
  hoveredElement,
  propsClassName,
}: ResultsCardTypes) {
  return (
    <div
      onMouseEnter={() => {
        setHoveredElement("card");
      }}
      onMouseLeave={() => {
        setHoveredElement("");
      }}
      className={`${propsClassName} ${styles["results-card"]}
     ${
       hoveredElement === "card"
         ? styles["results-card-hover"]
         : styles["results-card-no-hover"]
     }
    `}
    >
      {children}
    </div>
  );
}

export { ResultsCard };
