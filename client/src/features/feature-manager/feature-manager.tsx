import { MainLayout } from "common/components/layout/main-layout";
import { Results } from "features/results";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { ViewRecipe } from "features/recipe/view/view-recipe";
import { ReactNode } from "react";
import { CreateRecipe } from "features/recipe/create/create-recipe";
import { useNavigate } from "react-router-dom";
import styles from "./_feature-manager.module.scss";

function FeatureManager() {
  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );

  const navigate = useNavigate();

  let cardElements: ReactNode[] = [];

  cards.forEach((card) => {
    switch (card) {
      case "recipeView": {
        cardElements.unshift(<ViewRecipe key={card} />);
        break;
      }
      case "results": {
        cardElements.push(<Results key={card} />);
        break;
      }
      case "newRecipe": {
        cardElements = [<CreateRecipe key={card} />];
        break;
      }
    }
  });

  if (cardElements.length === 0) {
    navigate("/home");
  }

  const newRecipe = cards.includes("newRecipe");

  return (
    <MainLayout backgroundId="picnic">
      <div
        className={`${newRecipe ? styles["new-recipe"] : styles["two-cards"]}`}
      >
        <>
          {cardElements.map((cardElement) => {
            return cardElement;
          })}
        </>
      </div>
    </MainLayout>
  );
}

export { FeatureManager };
