import { MainLayout } from "common/components/layout/main-layout";
import { Results } from "features/results";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Recipe } from "features/recipe";
import { ReactNode } from "react";

function FeatureManager() {
  const cards = useSelector(
    (state: RootState) => state.commonApp.currentOpenFeatureCards
  );

  const cardElements: ReactNode[] = [];

  cards.forEach((card) => {
    switch (card) {
      case "recipeView": {
        cardElements.unshift(<Recipe key={card} />);
        break;
      }
      case "results": {
        cardElements.push(<Results key={card} />);
        break;
      }
    }
  });

  return (
    <MainLayout>
      <>
        {cardElements.map((cardElement) => {
          return cardElement;
        })}
      </>
    </MainLayout>
  );
}

export { FeatureManager };
