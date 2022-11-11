import styles from "./_results.module.scss";
import { ResultsCardLong } from "./components/layouts/results-card-long";
import { ResultsCardBlock } from "./components/layouts/results-card-block";
import { TypeRecipe } from "types/common-types";
import { useEffect, useRef, useState } from "react";
import { RecipeHeader } from "./components/results-header";
import { RECIPIES } from "temp-data/TEMP_DATA";
import useWindowResize from "hooks/use-window-resize";

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

  return (
    <div
      ref={resultsMasterContainer}
      className={styles["results-master-container"]}
    >
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
