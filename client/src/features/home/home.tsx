import { MainLayout } from "common/components/layout/main-layout";
import styles from "./_home.module.scss";
import missStrawberryWelcome from "assets/images/miss-strawberry/welcome_transparent.png";

function Home() {
  return (
    <MainLayout backgroundId="picnic">
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
