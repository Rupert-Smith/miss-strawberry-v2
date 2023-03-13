import { useState } from "react";
import styles from "./_search.module.scss";
import "./mui-header-styles.scss";
import { ReactComponent as SearchIcon } from "assets/icons/magnifying-glass-light.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ReactComponent as TagIcon } from "assets/icons/tag-light.svg";
import { ReactComponent as SearchSettingsIcon } from "assets/icons/sliders-light.svg";
import useGetResults from "../results/hooks/use-get-results";
import variables from "assets/theme/_constants.module.scss";

type SearchTypes = {
  disabled: Boolean;
};

function Search({ disabled }: SearchTypes) {
  return (
    <>
      <SearchBar disabled={disabled} />
      {/* <SearchSettingsButton />
      <TagButton /> */}
    </>
  );
}

function SearchBar({ disabled }: SearchTypes) {
  const { handleSearch } = useGetResults();
  const [searchQuery, setSearchQuery] = useState("");
  const searchSuggestions = ["pizza", "strawberries", "chocolate muffins"];

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        !disabled && handleSearch(searchQuery);
      }}
      className={styles["search-form"]}
    >
      <Autocomplete
        className={`search-bar-mui`}
        freeSolo
        disabled={disabled && true}
        id="free-solo-2-demo"
        disableClearable
        options={searchQuery === "" ? [] : searchSuggestions}
        renderInput={(params) => (
          <TextField
            className={`${styles["search-bar"]} ${
              disabled
                ? styles["search-bar-disabled"]
                : styles["search-bar-not-disabled"]
            }`}
            {...params}
            placeholder={!disabled ? "what do you want to eat?" : ""}
            InputProps={{
              style: {
                width: "32em",
                backgroundColor: disabled ? variables.disabledLight : "white",
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
              setSearchQuery(event.target.value);
            }}
          />
        )}
      />
      <button
        className={`${styles["search-bar-button"]}  ${
          disabled ? styles["button-disabled"] : styles["button-not-disabled"]
        }`}
      >
        <div className={`${styles["search-bar-button-inside"]}`}>
          {!disabled && (
            <>
              <SearchIcon />
              search
            </>
          )}
        </div>
      </button>
    </form>
  );
}

function SearchSettingsButton() {
  return <SearchSettingsIcon className={styles["default-header-button"]} />;
}

function TagButton() {
  return <TagIcon className={styles["default-header-button"]} />;
}

export { Search };
