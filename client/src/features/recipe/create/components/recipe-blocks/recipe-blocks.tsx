import React from "react";
import styles from "./_recipe-blocks.module.scss";
import { Card } from "common/components/cards/card";
import TextareaAutosize from "react-textarea-autosize";
import { ReactComponent as CloseIcon } from "assets/icons/circle-xmark-duotone.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus-light.svg";
import { InputSelect } from "common/components/inputs/text-field/input-select";
import { units } from "constants/recipe-constants";
import { categories } from "constants/recipe-constants";

type RecipeBlocksTypes = {
  blocks: any;
  label: string;
  actions: any;
  moduleId: string;
};

function RecipeBlocks({ blocks, label, actions, moduleId }: RecipeBlocksTypes) {
  return (
    <div className={styles["recipe-blocks-container"]}>
      {blocks.map((block: any, index: number) => {
        return moduleId === "ingredients" ? (
          <IngredientBlock key={block.id} actions={actions} block={block} />
        ) : (
          <TextLabelBlock
            key={block.id}
            label={label}
            actions={actions}
            block={block}
            index={index}
          />
        );
      })}
    </div>
  );
}

type TextLabelBlockTypes = {
  block: any;
  label: string;
  actions: any;
  index: number;
};

function TextLabelBlock({ block, index, label, actions }: TextLabelBlockTypes) {
  return (
    <div className={styles["block"]}>
      <div className={styles["label"]}>{`${label} ${index + 1}`}:</div>
      <Card propsClassName={styles["text-box"]}>
        <TextareaAutosize
          wrap="soft"
          value={block.recipeData}
          onChange={(event) => {
            actions.updateBlockContent(event.target.value, block.id);
          }}
        />
      </Card>
      <CloseIcon
        onClick={() => {
          actions.removeBlock(block.id);
        }}
        className={styles["close-icon"]}
      />
    </div>
  );
}

type IngredientBlockTypes = {
  block: any;
  actions: any;
};

function IngredientBlock({ block, actions }: IngredientBlockTypes) {
  const handleUpdateBlock = (id: string, value: string | number) => {
    actions.updateBlockContent({ ...block.blockData, [id]: value }, block.id);
  };

  return (
    <div className={styles["block"]}>
      <Card propsClassName={styles["ingredient-card"]}>
        <div className={styles["ingredient-input-wrapper"]}>
          <div className={styles["label"]}>ingredient:</div>
          {/* <button className={`${styles["add-input-button"]}`}>
            Amount <PlusIcon />
          </button> */}
          <input
            placeholder="20"
            className={`${styles["number-input"]}`}
            type="number"
            value={block.blockData.amount}
            onChange={(event: any) => {
              handleUpdateBlock("amount", event.target.value);
            }}
          />

          {/* <button className={`${styles["add-input-button"]}`}>
            Unit <PlusIcon />
          </button> */}
          <InputSelect
            className={`${styles["override-mui-styles-input"]} ${styles["select-unit"]}`}
            options={units}
            value={block.blockData.unit}
            placeholder={"select a unit"}
            onChange={(event: any) => {
              handleUpdateBlock("unit", event.target.value);
            }}
          />

          <input
            onChange={(event: any) => {
              handleUpdateBlock("ingredient", event.target.value);
            }}
            value={block.blockData.ingredient}
            className={`${styles["food-input"]}`}
            placeholder="strawberries"
          />
        </div>
        <div className={styles["ingredient-input-wrapper"]}>
          <div className={styles["label"]}>category:</div>
          <InputSelect
            className={`${styles["override-mui-styles-input"]} ${styles["select-category"]}`}
            options={categories}
            placeholder={"select a category"}
            value={block.blockData.category}
            onChange={(event: any) => {
              handleUpdateBlock("category", event.target.value);
            }}
          />
        </div>
      </Card>
      <CloseIcon
        onClick={() => {
          actions.removeBlock(block.id);
        }}
        className={styles["close-icon"]}
      />
    </div>
  );
}

export { RecipeBlocks };
