import styles from "./_about.module.scss";
import aboutImage from "assets/images/miss-strawberry/about.png";
import HeartImage from "assets/images/shapes/heart-drawn.png";
import useWindowConfigActions from "common/components/window/hooks/use-window-config-actions";
import { NewRecipeButton } from "common/components/buttons/new-recipe-button";
import heartIcon from "assets/images/sidebar/heart.png";
import { CloseButton } from "common/components/buttons/close-button";

function About() {
  const { closeWindowDefault } = useWindowConfigActions();

  return (
    <div className={`${styles["about-container"]}`}>
      <CloseButton
        propsClassName={`${styles["cross"]}`}
        black
        propsOnClick={() => {
          closeWindowDefault();
        }}
      />
      {/* <CrossIcon className={`${styles["cross"]}`} /> */}
      <img
        className={styles["miss-strawberry-image"]}
        src={aboutImage}
        alt={"miss strawberry waving"}
      />
      <div className={styles["text-container"]}>
        <div className={styles["text-block"]}>
          miss strawberry! is an app that helps you keep track of your favourite
          recipes!
        </div>
        <div className={styles["text-block"]}>
          to create a recipe, click on the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NewRecipeButton propsClassName={styles["new-recipe-icon"]} />
          icon. to add a recipe to your favourites, click on the
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={styles["favourites-button"]}>
            <img src={heartIcon} alt={"heart icon"} />
          </div>
          icon.
        </div>
        <div>more features to be added soon!</div>
        {/* <div className={styles["text-block"]}>
          miss strawberry! also helps with shopping! Simply add a recipe to the
          cart, and Miss Strawberry will calculate all the ingredients you will
          need and organize them for you!
        </div> */}
        <div className={styles["text-block"]}>
          please direct all questions/comments to
          <strong> rupertwebdev@gmail.com</strong> thank you for using my app!
          ･ᴗ･
        </div>
        <div className={`${styles["text-block"]} ${styles["name"]}`}>
          rupert
          <img
            className={styles["heart-shape"]}
            src={HeartImage}
            alt={"heart shape"}
          />
        </div>
      </div>
    </div>
  );
}

export { About };
