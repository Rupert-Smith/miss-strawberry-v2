import styles from "./_results-card.module.scss";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { commonAppActions } from "common/store/common-app-slice";

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
  const dispatch = useDispatch();

  function handleClickCard() {
    dispatch(
      commonAppActions.setCurrentOpenFeatureCards({
        cardAction: "add",
        cardId: "recipeView",
      })
    );
  }

  return (
    <div
      onClick={() => {
        handleClickCard();
      }}
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
