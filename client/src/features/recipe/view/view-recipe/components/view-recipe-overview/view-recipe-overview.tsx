import React, { ReactNode } from "react";
import styles from "./_view-recipe-overview.module.scss";
import { ReactComponent as TimeIcon } from "assets/icons/timer-light.svg";
import { ReactComponent as PoundIcon } from "assets/icons/sterling-sign-light.svg";
import { ReactComponent as SmileIcon } from "assets/icons/face-smile-light.svg";
import { ReactComponent as LeafIcon } from "assets/icons/leafy-green-light.svg";
import { ReactComponent as TickIcon } from "assets/icons/circle-check-duotone.svg";
import { ReactComponent as CrossIcon } from "assets/icons/circle-xmark-duotone.svg";
import { ReactComponent as PeopleIcon } from "assets/icons/user-group-regular.svg";
import { ReactComponent as RecipeIcon } from "assets/icons/book-light.svg";
import VeganImage from "assets/icons/non-font-awesome/vegan.png";
import { ReactComponent as VIcon } from "assets/icons/v-regular.svg";
import { Price } from "common/components/recipe-components/price";
import { Time } from "common/components/recipe-components/time";
import { RecipeImage } from "common/components/recipe-components/recipe-image";
import { TypeRecipe } from "common/types/common-types";
import { RecipeModule } from "features/recipe/components/recipe-module";
import { InputRating } from "common/components/inputs/input-rating";

type Props = {
  recipe: TypeRecipe;
};

function ViewRecipeOverview({ recipe }: Props) {
  function crossOrTick(value: boolean | null) {
    if (value) {
      return <TickIcon className={styles["tick-icon"]} />;
    } else {
      return <CrossIcon className={styles["cross-icon"]} />;
    }
  }

  const overviewMap: { icon: ReactNode; value: ReactNode }[] = [
    {
      icon: <TimeIcon />,
      value: <Time icon={false} time={recipe.overview.cookingTime} />,
    },
    {
      icon: <PoundIcon />,
      value: <Price priceNumber={recipe.overview.price} />,
    },
    {
      icon: <SmileIcon />,
      value: <InputRating read propsInitialValue={recipe.overview.rating} />,
    },
    {
      icon: <VIcon />,
      value: (
        <div className={styles["veg-container"]}>
          <LeafIcon />
          {crossOrTick(recipe.overview.vegetarian)}
          <img src={VeganImage} alt="Vegan" />
          {crossOrTick(recipe.overview.vegan)}
        </div>
      ),
    },
    {
      icon: <PeopleIcon />,
      value: <div>{`${recipe.overview.servings} (default)`}</div>,
    },
    // {
    //   icon: <RecipeIcon />,
    //   value: (
    //     <>
    //       {recipe.overview.source.type === "link" ? (
    //         <button></button>
    //       ) : (
    //         <div className={styles["source-value"]}>
    //           {recipe.overview.source.value}
    //         </div>
    //       )}
    //     </>
    //   ),
    // },
  ];

  return (
    <RecipeModule state="view" shrink moduleId={"overview"}>
      <div className={styles["overview-body"]}>
        <div className={styles["image-container"]}>
          <RecipeImage
            flagSize="small"
            country={recipe.overview.country}
            alt={recipe.overview.title}
            src={recipe.overview.image}
            imageClassName={`${styles["recipe-picture"]}`}
          />
        </div>
        <div className={styles["overview-list"]}>
          {overviewMap.map((overviewRow) => {
            return (
              <div className={styles["overview-list-row"]}>
                <div>{overviewRow.icon}</div>
                <div className={styles["overview-list-row-value"]}>
                  {overviewRow.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RecipeModule>
  );
}

export { ViewRecipeOverview };
