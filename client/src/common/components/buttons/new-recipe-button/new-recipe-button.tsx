import styles from "./_new-recipe-button.module.scss";
import { ReactComponent as NewRecipeIcon } from "assets/icons/bowl-chopsticks-light.svg";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect } from "react";
import { useState } from "react";

type NewRecipeButtonProps = {
  propsClassName?: string;
  propsOnClick?: Function;
};

function NewRecipeButton({
  propsClassName,
  propsOnClick,
}: NewRecipeButtonProps) {
  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );

  const [newRecipeOn, setNewRecipe] = useState(false);

  useEffect(() => {
    if (cards.includes("newRecipe")) {
      setNewRecipe(true);
    }
    if (!cards.includes("newRecipe")) {
      setNewRecipe(false);
    }
  }, [cards]);

  return (
    <div
      onClick={() => {
        if (propsOnClick) {
          propsOnClick();
        }
      }}
      className={`${styles["new-recipe-button"]} ${propsClassName} ${
        newRecipeOn
          ? styles["newRecipeActivated"]
          : styles["newRecipeDeactivated"]
      }`}
    >
      <NewRecipeIcon />
    </div>
  );
}

export { NewRecipeButton };
