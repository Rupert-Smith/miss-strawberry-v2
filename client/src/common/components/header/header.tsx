import { useState } from "react";
import { AppBar } from "@mui/material";
import styles from "./_header.module.scss";
import { IconButton } from "@mui/material";
import { ReactComponent as MenuIcon } from "assets/icons/bars-regular.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart-shopping-light.svg";
import missStrawberryHomeImage from "assets/images/miss-strawberry/welcome_transparent.png";
import variables from "assets/theme/_constants.module.scss";
import profilePicture from "assets/images/temp/profile.png";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Search } from "features/search";
import { ProfileWindow } from "common/components/header/components/windows/profile-window";
import { useRef } from "react";
import { NewRecipeButton } from "../buttons/new-recipe-button";
import { Music } from "features/music";
import { DefaultUser } from "../images-and-icons/default-user";
import { ReactComponent as ChefIcon } from "assets/icons/user-chef-light.svg";
import useCreateRecipeHandler from "features/recipe/create/create-recipe/hooks/use-create-recipe-handler";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  toggleSidebarOpen: Function;
};

function Header({ toggleSidebarOpen }: HeaderProps) {
  const disabledComponents = useSelector(
    (state: RootState) => state.sidebarHeader.disabledComponents
  );
  const { openCreateRecipe } = useCreateRecipeHandler();

  return (
    <AppBar className={styles["header"]}>
      <div className={styles["header-section"]}>
        <ShowHideButton
          disabled={disabledComponents.sidebar}
          toggleSidebarOpen={toggleSidebarOpen}
        />
        <HomeButton disabled={disabledComponents.home} />
      </div>
      <div className={styles["header-section"]}>
        <Search disabled={disabledComponents.search} />
      </div>
      <div className={styles["header-section"]}>
        <NewRecipeButton
          propsOnClick={openCreateRecipe}
          propsClassName={`${styles["header-circle-button"]} ${styles["new-recipe-button"]} `}
        />
        {/* <ViewCartButton /> */}
        <Music propsClassName={styles["default-header-button"]} />
        <ProfileButtonManager />
      </div>
    </AppBar>
  );
}

type ShowHideProps = {
  toggleSidebarOpen: Function;
  disabled: Boolean;
};

function ShowHideButton({ disabled, toggleSidebarOpen }: ShowHideProps) {
  return (
    <MenuIcon
      onClick={() => {
        !disabled && toggleSidebarOpen();
      }}
      className={`${styles["menu-header-button"]} ${
        disabled && styles["disabled"]
      }`}
    />
  );
}

type HomeButtonStyles = {
  disabled: Boolean;
};

function HomeButton({ disabled }: HomeButtonStyles) {
  const [missStrawberryHover, setMissStrawberryHover] = useState(false);

  const navigate = useNavigate();

  const toggleHoverStyles = () => {
    if (disabled) {
      return;
    }
    setMissStrawberryHover(!missStrawberryHover);
  };

  return (
    <div
      className={`${disabled ? styles["disabled"] : styles["not-disabled"]} ${
        styles["header-circle-button"]
      } ${styles["home-button"]}`}
      style={
        missStrawberryHover ? { background: variables.cherryBlossomPink } : {}
      }
      onClick={() => {
        !disabled && navigate("/home");
      }}
    >
      <img
        onMouseEnter={toggleHoverStyles}
        onMouseLeave={toggleHoverStyles}
        className={`${styles["miss-strawberry-home-image"]}`}
        src={missStrawberryHomeImage}
        alt="Miss Strawberry Home Button"
      />
    </div>
  );
}

function ViewCartButton() {
  return <CartIcon className={`${styles["default-header-button"]}`} />;
}

function ProfileButtonManager() {
  const [profileWindowOpen, setProfileWindowOpen] = useState(false);
  const ProfileButton: any = useRef(null);

  return (
    <div ref={ProfileButton}>
      <IconButton
        onClick={() => {
          setProfileWindowOpen(!profileWindowOpen);
        }}
        disableRipple
      >
        <ChefIcon
          className={`${styles["default-header-button"]} ${styles["chef-header-button"]}`}
        />
        {/* <DefaultUser button /> */}
        {/* <Avatar alt="default user" src={profilePicture} /> */}
      </IconButton>
      {profileWindowOpen && (
        <ProfileWindow
          buttonRef={ProfileButton}
          closeWindow={() => {
            setProfileWindowOpen(false);
          }}
        />
      )}
    </div>
  );
}

export { Header };
