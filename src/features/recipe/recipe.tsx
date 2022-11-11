import React from "react";
import { MainLayout } from "components/layout/main-layout";
import styles from "./_recipe.module.scss";
import {
  RecipeCardBody,
  RecipeCardHead,
  RecipeCardContainer,
} from "components/cards/recipe-card/recipe-card";

function RecipeCard() {
  return (
    <RecipeCardContainer>
      <RecipeCardHead></RecipeCardHead>
      <RecipeCardBody></RecipeCardBody>
    </RecipeCardContainer>
  );
}

export { RecipeCard };
