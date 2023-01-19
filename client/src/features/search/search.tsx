import { useState } from "react";
import styles from "./_search.module.scss";
import "./mui-header-styles.scss";
import { ReactComponent as SearchIcon } from "assets/icons/magnifying-glass-light.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { ReactComponent as TagIcon } from "assets/icons/tag-light.svg";
import { ReactComponent as SearchSettingsIcon } from "assets/icons/sliders-light.svg";
import { useDispatch } from "react-redux";
import { commonAppActions } from "common/store/common-app-slice";

function Search() {
  return (
    <>
      <SearchBar />
      <SearchSettingsButton />
      <TagButton />
    </>
  );
}

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchSuggestions = ["pizza", "strawberries", "chocolate muffins"];
  const dispatch = useDispatch();

  const handleSearchQuery = (inputValue: string) => {
    setSearchQuery(inputValue);
  };

  function handleClickSearch() {
    dispatch(
      commonAppActions.setCurrentOpenFeatureCards({
        cardAction: "add",
        cardId: "results",
      })
    );
  }

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
            <div
              onClick={() => handleClickSearch()}
              className={styles["search-bar-button"]}
            >
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

export { Search };
