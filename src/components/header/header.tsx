import { useState } from "react";
import { AppBar } from "@mui/material";
import styles from "./_header.module.scss";
import { IconButton } from "@mui/material";
import "./mui-header-styles.scss";
import { ReactComponent as MenuIcon } from "assets/icons/bars-regular.svg";
import { ReactComponent as NewRecipeIcon } from "assets/icons/bowl-chopsticks-light.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart-shopping-light.svg";
import { ReactComponent as AudioOnIcon } from "assets/icons/volume-light.svg";
import { ReactComponent as AudioOffIcon } from "assets/icons/volume-slash-light.svg";
import { ReactComponent as TagIcon } from "assets/icons/tag-light.svg";
import { ReactComponent as SearchSettingsIcon } from "assets/icons/sliders-light.svg";
import { ReactComponent as SearchIcon } from "assets/icons/magnifying-glass-light.svg";
import missStrawberryHomeImage from "assets/images/miss-strawberry/welcome_transparent.png";
import variables from "theme/_constants.module.scss";
import profilePicture from "assets/images/temp/profile.png";
import Avatar from "@mui/material/Avatar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  toggleSidebarOpen: Function;
};

function Header({ toggleSidebarOpen }: HeaderProps) {
  return (
    //position="sticky"
    <AppBar className={styles["header"]}>
      <div className={styles["header-section"]}>
        <ShowHideButton toggleSidebarOpen={toggleSidebarOpen} />
        <HomeButton />
      </div>
      <div className={styles["header-section"]}>
        <SearchBar />
        <SearchSettingsButton />
        <TagButton />
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

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchSuggestions = ["pizza", "strawberries", "chocolate muffins"];

  const handleSearchQuery = (inputValue: string) => {
    setSearchQuery(inputValue);
  };

  return (
    <NavLink to="/search">
      <Autocomplete
        className={`search-bar-mui`}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={searchQuery === "" ? [] : searchSuggestions}
        renderInput={(params) => (
          <>
            <TextField
              className={styles["search-bar"]}
              {...params}
              placeholder="what do you want to eat?"
              InputProps={{
                style: {
                  width: "32em",
                  padding: "0em",
                  paddingLeft: ".8em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2em",
                  background: "white",
                  fontSize: ".8em",
                },
              }}
              value={searchQuery}
              onChange={(event) => {
                handleSearchQuery(event.target.value);
              }}
            />
            <div className={styles["search-bar-button"]}>
              <SearchIcon />
              Search
            </div>
          </>
        )}
      />
    </NavLink>
  );
}

function SearchSettingsButton() {
  return <SearchSettingsIcon className={styles["default-header-button"]} />;
}

function TagButton() {
  return <TagIcon className={styles["default-header-button"]} />;
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
