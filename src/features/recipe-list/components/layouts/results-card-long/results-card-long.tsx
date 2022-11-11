import styles from "./_results-card-long.module.scss";
import { useState } from "react";
import { TypeRecipe } from "types/common-types";
import { RecipeImage } from "features/recipe-list/components/layouts/components/recipe-image";

import { Rating } from "../components/rating";
import { clickOnRecipeTest } from "temp-data/temp_CONTANTS";
import { ActionButtons } from "../components/action-buttons";
import { ResultsCard } from "../components/results-card";
import { Price } from "../components/price";
import { Time } from "../components/time";
import { Title } from "../components/title";
import { RecipeInstructions } from "../components/recipe-instructions";

type ResultsCardLongTypes = {
  recipe: TypeRecipe;
};

// function ResultsCardLong({ recipe }: ResultsCardLongTypes) {
//   return (
//     <>
//       {!clickOnRecipeTest ? (
//         <ResultsCardLongFull recipe={recipe} />
//       ) : (
//         <ResultsCardLongShrink recipe={recipe} />
//       )}
//     </>
//   );
// }

function ResultsCardLong({ recipe }: ResultsCardLongTypes) {
  const [hoveredElement, setHoveredElement] = useState("");

  return (
    <ResultsCard
      setHoveredElement={setHoveredElement}
      hoveredElement={hoveredElement}
      propsClassName={`${styles["results-card-long"]}`}
    >
      <div className={styles["column-one-picture-title"]}>
        <RecipeImage
          flagSize="small"
          origin={recipe.overview.origin}
          alt={recipe.overview.title}
          src={recipe.overview.image}
          imageClassName={`${styles["recipe-picture-long"]}`}
        />
        <div className={styles["title-time-block"]}>
          <Title title={recipe.overview.title} />
          <Time time={recipe.overview.time} />
        </div>
      </div>
      <ActionButtons setHoveredElement={setHoveredElement} />
      <div className={styles["column-four-instructions"]}>
        <RecipeInstructions steps={recipe.steps} />
      </div>
      <div className={styles["column-five-rating-and-price"]}>
        <Rating rating={recipe.overview.rating} />
        <Price priceNumber={recipe.overview.price} />
      </div>
    </ResultsCard>
  );
}

// function ResultsCardLongShrink({ recipe }: ResultsCardLongTypes) {
//   const [hoveredElement, setHoveredElement] = useState("");

//   return (
//     <ResultsCard
//       setHoveredElement={setHoveredElement}
//       hoveredElement={hoveredElement}
//       propsClassName={`${styles["results-card-long-shrink"]}`}
//     >
//       <div className={styles["column-one-picture-title"]}>
//         <RecipeImage
//           flagSize="small"
//           origin={recipe.overview.origin}
//           alt={recipe.overview.title}
//           src={recipe.overview.image}
//           imageClassName={`${styles["recipe-picture-long"]}`}
//         />
//         <div className={styles["title-time-block"]}>
//           <Title title={recipe.overview.title} />
//           <Time time={recipe.overview.time} />
//         </div>
//       </div>
//       <ActionButtons setHoveredElement={setHoveredElement} />
//       <div className={styles["column-five-rating-and-price"]}>
//         <Rating rating={recipe.overview.rating} />
//       </div>
//     </ResultsCard>
//   );
// }

export { ResultsCardLong };
