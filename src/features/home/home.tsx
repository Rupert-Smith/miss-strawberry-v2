import { MainLayout } from "components/layout/main-layout";
import styles from "./_home.module.scss";
import polkaDots from "assets/images/backgrounds/polka-light.jpg";
import missStrawberryWelcome from "assets/images/miss-strawberry/welcome_transparent.png";

function Home() {
  return (
    <MainLayout
      backgroundStyle={{
        backgroundImage: `url(${polkaDots})`,
        height: "100vh",
        backgroundRepeat: "repeat",
        backgroundSize: "10em",
        width: "100%",
      }}
    >
      <div className={styles["home-wrapper"]}>
        <div className={styles["miss-strawberry-image-container"]}>
          <img
            src={missStrawberryWelcome}
            alt="Miss Strawberry welcome cartoon"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export { Home };
