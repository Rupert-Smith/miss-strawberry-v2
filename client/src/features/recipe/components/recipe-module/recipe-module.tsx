import React from "react";
import { useState } from "react";
import styles from "./_recipe-module.module.scss";
import { CardBody, CardHead, Card } from "common/components/cards/card";
import { GeneralHeading } from "common/components/general-heading";
import { ReactComponent as StepsIcon } from "assets/icons/shoe-prints-light.svg";
import { ReactComponent as IngredientsIcon } from "assets/icons/strawberry-light.svg";
import { ReactComponent as DashIcon } from "assets/icons/dash-light.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus-light.svg";
import { ReactComponent as TipsIcon } from "assets/icons/lightbulb-on-light.svg";
import { ReactComponent as TagsIcon } from "assets/icons/tag-light.svg";
import { ReactComponent as OverviewIcon } from "assets/icons/clipboard-list-light.svg";
import { TypeRecipe } from "common/types/common-types";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { recipeLayoutActions } from "features/recipe/store/recipe-layout-slice";
import { useSelector } from "react-redux";
import { RootState } from "store";

type Props = {
  shrink?: boolean;
  children?: ReactNode;
  moduleId: string;
  propsClassName?: string;
  state: string;
};

function RecipeModule({
  shrink,
  children,
  moduleId,
  propsClassName,
  state,
}: Props) {
  let headingConfig = {
    heading: "",
    icon: <></>,
  };

  const dispatch = useDispatch();

  const [headHover, setHeadHover] = useState(false);

  const viewModulesCondition = useSelector(
    (state: RootState) => state.recipeLayout.viewModulesCondition
  );
  const createModulesCondition = useSelector(
    (state: RootState) => state.recipeLayout.createModulesCondition
  );

  const collapse =
    state === "view"
      ? viewModulesCondition[moduleId]
      : createModulesCondition[moduleId];

  switch (moduleId) {
    case "overview": {
      headingConfig.heading = "overview";
      headingConfig.icon = <OverviewIcon />;
      break;
    }
    case "ingredients": {
      headingConfig.heading = "ingredients";
      headingConfig.icon = <IngredientsIcon />;
      break;
    }
    case "steps": {
      headingConfig.heading = "steps";
      headingConfig.icon = <StepsIcon />;
      break;
    }
    case "tips": {
      headingConfig.heading = "tips";
      headingConfig.icon = <TipsIcon />;
      break;
    }
    case "tags": {
      headingConfig.heading = "tags";
      headingConfig.icon = <TagsIcon />;
    }
  }

  return (
    <>
      <Card
        propsClassName={`${propsClassName} ${styles["card"]} ${
          headHover && styles["head-hover"]
        }`}
      >
        <CardHead
          propsOnMouseOut={() => {
            setHeadHover(false);
          }}
          propsOnMouseOver={() => {
            setHeadHover(true);
          }}
          propsOnClick={() => {
            dispatch(
              recipeLayoutActions.setModulesCondition({
                moduleId,
                collapse: !collapse,
                state,
              })
            );
          }}
          small
          propsClassName={`${styles["head"]}`}
        >
          <GeneralHeading
            small
            heading={headingConfig.heading}
            icon={headingConfig.icon}
          />
          {shrink && (
            <div className={styles["header-right-corner"]}>
              {collapse ? (
                <PlusIcon
                  className={`${styles["open-close-icons"]} ${styles["plus-icon"]}`}
                />
              ) : (
                <DashIcon className={styles["open-close-icons"]} />
              )}
            </div>
          )}
        </CardHead>
        {!collapse && (
          <CardBody propsClassName={styles["body"]}>{children}</CardBody>
        )}
      </Card>
    </>
  );
}

export { RecipeModule };
