import React, { ReactNode } from "react";
import { Header } from "common/components/header";
import { Sidebar } from "common/components/sidebar";
import styles from "./_main-layout.module.scss";
import polkaDots from "assets/images/backgrounds/polka-light.jpg";
import picnicImage from "assets/images/backgrounds/picnic.jpg";
import variables from "assets/theme/_constants.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

type Props = {
  children?: ReactNode;
  backgroundId: string;
};

function MainLayout({ children, backgroundId }: Props) {
  const [sideBar, setSideBar] = React.useState(false);

  const toggleSidebarOpen = () => {
    setSideBar(!sideBar);
  };

  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );

  // When we only have the results card, we don't want the use to be able to scroll, we want the card to take up the whole page. For this reason, we set up the resultsOnlyHeight. We also want the same effect if we only have the new recipe

  const resultsOnlyHeight =
    cards.includes("results") && cards.length === 1
      ? // || cards.includes("newRecipe")
        "100vh"
      : "100%";

  // console.log(cards);

  let backgroundStyle;

  let picnic = {
    backgroundImage: `url(${picnicImage})`,
    // backgroundColor: variables.beachYellow,
    // backgroundColor: variables.babyPink,
    // background: "rgb(255,179,218)",
    // background:
    //   "linear-gradient(90deg, rgba(255,179,218,1) 0%, rgba(255,240,255,1) 100%)",
    // backgroundColor: "white",
    // height: "100%",
    backgroundRepeat: "repeat",
    backgroundSize: "28em",
    height: resultsOnlyHeight,
    width: "100%",
  };

  switch (backgroundId) {
    case "picnic": {
      backgroundStyle = picnic;
      break;
    }
    default: {
      backgroundStyle = picnic;
    }
  }

  return (
    <div className={`${styles["master-container"]}`}>
      <Header toggleSidebarOpen={toggleSidebarOpen} />
      <Sidebar open={sideBar} setSidebar={setSideBar} />
      <div className={`${styles["main-content"]}`} style={backgroundStyle}>
        {children}
      </div>
    </div>
  );
}

export { MainLayout };
