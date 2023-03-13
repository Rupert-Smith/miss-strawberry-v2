import styles from "./_no-blocks.module.scss";
import { ReactComponent as MehIcon } from "assets/icons/face-meh-light.svg";
import { AddNewBlockButton } from "../../features/recipe/create/components/buttons/add-new-block-button";

type NoBlocksTypes = {
  addNewBlockButton: any;
  label: string;
};

function NoBlocks({ label, addNewBlockButton }: NoBlocksTypes) {
  return (
    <div className={styles["no-blocks-container"]}>
      <div className={styles["no-blocks-text"]}>
        {`no ${label}s`}
        <MehIcon />
      </div>
      <AddNewBlockButton propsOnClick={addNewBlockButton} label={label} />
    </div>
  );
}

export { NoBlocks };
