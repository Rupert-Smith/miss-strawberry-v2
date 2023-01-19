import { ReactNode } from "react";
import styles from "./_results-header.module.scss";
import { ReactComponent as MagnifyingGlass } from "assets/icons/magnifying-glass-light.svg";
import { ReactComponent as ListIcon } from "assets/icons/list-solid.svg";
import { ReactComponent as BlockIcon } from "assets/icons/image-solid.svg";
import { convertToPlural } from "common/helpers/convert-to-plural";
import { GeneralHeading } from "common/components/general-heading";

type RecipeHeaderTypes = {
  searchResults: Object[];
  selectedLayout: string;
  setSelectedLayout: Function;
};

function RecipeHeader({
  searchResults,
  selectedLayout,
  setSelectedLayout,
}: RecipeHeaderTypes) {
  const resultLayouts: { layoutId: string; icon: ReactNode }[] = [
    { layoutId: "list", icon: <ListIcon /> },
    { layoutId: "block", icon: <BlockIcon /> },
  ];

  const handleSelectIcon = (layoutId: string) => {
    setSelectedLayout(layoutId);
  };

  return (
    <div className={styles["results-header"]}>
      <GeneralHeading heading="search results" icon={<MagnifyingGlass />} />
      <div className={styles["results-bar"]}>
        <div className={styles["layer-buttons-container"]}>
          {resultLayouts.map((layout) => {
            return (
              <div
                onClick={() => {
                  handleSelectIcon(layout.layoutId);
                }}
                className={`${styles["layer-button"]} ${
                  selectedLayout === layout.layoutId
                    ? styles["layer-button-selected"]
                    : styles["layer-button-not-selected"]
                }`}
                key={layout.layoutId}
              >
                {layout.icon}
              </div>
            );
          })}
        </div>
        <div className={styles["result-total"]}>{`${
          searchResults.length
        } ${convertToPlural("result", searchResults.length)}`}</div>
      </div>
    </div>
  );
}

export { RecipeHeader };
