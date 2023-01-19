import styles from "./_results.module.scss";
import { ResultsCardLong } from "./components/layouts/results-card-long";
import { ResultsCardBlock } from "./components/layouts/results-card-block";
import { TypeRecipe } from "common/types/common-types";
import { useEffect, useRef, useState } from "react";
import { RecipeHeader } from "./components/results-header";
import { RECIPIES } from "common/temp-data/TEMP_DATA";
import useWindowResize from "common/hooks/use-window-resize";
import { CloseButton } from "common/components/buttons/close-button";
import { useDispatch } from "react-redux";
import { commonAppActions } from "common/store/common-app-slice";
import { useSelector } from "react-redux";
import { RootState } from "store";

function Results() {
  const windowHeight = useWindowResize()[1];

  const searchResults: TypeRecipe[] = RECIPIES;
  const [selectedLayout, setSelectedLayout] = useState("list");

  const resultsMasterContainer = useRef(document.createElement("div"));

  const [resultsMasterContainerHeight, setResultsMasterContainerHeight] =
    useState(resultsMasterContainer.current.offsetHeight);

  useEffect(() => {
    setResultsMasterContainerHeight(
      resultsMasterContainer.current.offsetHeight
    );
  }, [windowHeight]);

  const listHeight = `${resultsMasterContainerHeight - 115}px`;

  const dispatch = useDispatch();

  const cards = useSelector(
    (state: RootState) => state.commonApp.currentOpenFeatureCards
  );

  return (
    <div
      ref={resultsMasterContainer}
      className={styles["results-master-container"]}
    >
      {cards.includes("recipeView") && (
        <div className={styles["close-button-wrapper"]}>
          <CloseButton
            propsOnClick={() => {
              dispatch(
                commonAppActions.setCurrentOpenFeatureCards({
                  cardAction: "remove",
                  cardId: "results",
                })
              );
            }}
            propsClassName={styles["close-button"]}
            black
          />
        </div>
      )}

      <RecipeHeader
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}
        searchResults={searchResults}
      />
      {selectedLayout === "list" && (
        <div
          className={`${styles["results-list"]} ${styles["results-list-long"]}`}
          style={{
            height: listHeight,
          }}
        >
          {searchResults.map((recipe) => {
            return <ResultsCardLong key={recipe.overview.id} recipe={recipe} />;
          })}
        </div>
      )}
      {selectedLayout === "block" && (
        <div
          className={`${styles["results-list"]} ${styles["results-list-block"]}`}
          style={{
            height: listHeight,
          }}
        >
          {searchResults.map((recipe) => {
            return (
              <ResultsCardBlock key={recipe.overview.id} recipe={recipe} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export { Results };
