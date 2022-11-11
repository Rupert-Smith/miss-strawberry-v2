import { useState } from "react";
import { MainLayout } from "components/layout/main-layout";
// import { RecipeListHeadingBar } from "features/recipe-list/components/recipe-list-heading-bar";
import { Results } from "features/recipe-list";
import { RECIPIES } from "temp-data/TEMP_DATA";
import { TypeRecipe } from "types/common-types";
import { RecipeCard } from "features/recipe";
import variables from "theme/_constants.module.scss";
import { clickOnRecipeTest } from "temp-data/temp_CONTANTS";
import styles from "./_feature-manager.module.scss";

function FeatureManager() {
  return (
    <MainLayout>
      {/* <RecipeListHeadingBar
        selectedLayout={selectedLayout}
        searchResults={searchResults}
        setSelectedLayout={setSelectedLayout}
      /> */}
      {!clickOnRecipeTest && <Results />}
      {clickOnRecipeTest && (
        <>
          <RecipeCard />
          <Results />
        </>
      )}
    </MainLayout>
  );
}

export { FeatureManager };
