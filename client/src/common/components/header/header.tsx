import { useState } from "react";
import { AppBar } from "@mui/material";
import styles from "./_header.module.scss";
import { IconButton } from "@mui/material";
import { ReactComponent as MenuIcon } from "assets/icons/bars-regular.svg";
import { ReactComponent as NewRecipeIcon } from "assets/icons/bowl-chopsticks-light.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart-shopping-light.svg";
import { ReactComponent as AudioOnIcon } from "assets/icons/volume-light.svg";
import { ReactComponent as AudioOffIcon } from "assets/icons/volume-slash-light.svg";
import missStrawberryHomeImage from "assets/images/miss-strawberry/welcome_transparent.png";
import variables from "assets/theme/_constants.module.scss";
import profilePicture from "assets/images/temp/profile.png";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Search } from "features/search";

type HeaderProps = {
  toggleSidebarOpen: Function;
};

function Header({ toggleSidebarOpen }: HeaderProps) {
  return (
    <AppBar className={styles["header"]}>
      <div className={styles["header-section"]}>
        <ShowHideButton toggleSidebarOpen={toggleSidebarOpen} />
        <HomeButton />
      </div>
      <div className={styles["header-section"]}>
        <Search />
      </div>
      <div className={styles["header-section"]}>
        <NewRecipeButton />
        <ViewCartButton />
        <VolumeButton />
        <ProfileButton />
      </div>
    </AppBar>
  );
}

type ShowHideProps = {
  toggleSidebarOpen: Function;
};

function ShowHideButton({ toggleSidebarOpen }: ShowHideProps) {
  return (
    <MenuIcon
      onClick={() => {
        toggleSidebarOpen();
      }}
      className={styles["menu-header-button"]}
    />
  );
}

function HomeButton() {
  const [missStrawberryHover, setMissStrawberryHover] = useState(false);

  const toggleHoverStyles = () => {
    setMissStrawberryHover(!missStrawberryHover);
  };

  return (
    <NavLink to="/home">
      <div
        className={`${styles["header-circle-button"]} ${styles["home-button"]}`}
        style={
          missStrawberryHover ? { background: variables.cherryBlossomPink } : {}
        }
      >
        <img
          onMouseEnter={toggleHoverStyles}
          onMouseLeave={toggleHoverStyles}
          className={styles["miss-strawberry-home-image"]}
          src={missStrawberryHomeImage}
          alt="Miss Strawberry Home Button"
        />
      </div>
    </NavLink>
  );
}

function NewRecipeButton() {
  return (
    <div
      className={`${styles["header-circle-button"]} ${styles["new-recipe-button"]}`}
    >
      <NewRecipeIcon />
    </div>
  );
}

function ViewCartButton() {
  return <CartIcon className={styles["default-header-button"]} />;
}

function VolumeButton() {
  const [volumeOn, setVolumeOn] = useState(false);

  const toggleVolume = () => {
    setVolumeOn(!volumeOn);
  };

  return (
    <>
      {volumeOn ? (
        <AudioOnIcon
          className={styles["default-header-button"]}
          onClick={toggleVolume}
        />
      ) : (
        <AudioOffIcon
          className={styles["default-header-button"]}
          onClick={toggleVolume}
        />
      )}
    </>
  );
}

function ProfileButton() {
  return (
    <IconButton disableRipple>
      <Avatar alt="default user" src={profilePicture} />
    </IconButton>
  );
}

export { Header };
