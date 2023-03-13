import { RecipeModule } from "features/recipe/components/recipe-module";
import styles from "./_create-recipe-overview.module.scss";
import { InputLabel } from "../input-label";
import { ReactComponent as ImageIcon } from "assets/icons/image-light.svg";
import { ReactNode, useState } from "react";
import { countries } from "constants/recipe-constants";
import { useRef } from "react";
import useClickOutsideClose from "common/hooks/use-click-outside-close";
import { directories } from "constants/recipe-constants";
import { TextField } from "@mui/material";
import CurrencyInput from "react-currency-input-field";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { InputSelect } from "common/components/inputs/text-field/input-select";
import variables from "assets/theme/_constants.module.scss";
import { Checkbox } from "@mui/material";
import { InputRating } from "common/components/inputs/input-rating";

type CreateRecipeOverviewTypes = {
  moduleConfig: any;
};

const returnCheckboxComponent = (overviewInputConfig: any, id: string) => {
  return (
    <Checkbox
      onChange={(event) =>
        overviewInputConfig.handleUpdateOverviewBlock(id, event.target.checked)
      }
      checked={overviewInputConfig.recipeData[id]}
      sx={{
        color: variables.nightBlack,
        "&.Mui-checked": {
          color: variables.fieldGreen,
        },
      }}
      style={{
        width: "0em",
        transform: `scale(${1.1})`,
      }}
      disableRipple
    />
  );
};

function CreateRecipeOverview({ moduleConfig }: CreateRecipeOverviewTypes) {
  const { recipeData, setRecipeData, moduleId }: any = moduleConfig;

  const handleUpdateOverviewBlock = (id: string, value: string | number) => {
    setRecipeData({ ...recipeData, [id]: value });
  };

  const overviewInputConfig = { handleUpdateOverviewBlock, recipeData };

  return (
    <RecipeModule state="create" shrink moduleId={moduleId}>
      <div className={styles["overview-body"]}>
        <div className={styles["inputs-container"]}>
          <Title overviewInputConfig={overviewInputConfig} />
          <CookingTime overviewInputConfig={overviewInputConfig} />
          <ServingNumber overviewInputConfig={overviewInputConfig} />
          <Price overviewInputConfig={overviewInputConfig} />
          <MultiLineInputRow>
            <Directories overviewInputConfig={overviewInputConfig} />
          </MultiLineInputRow>
          <MultiLineInputRow>
            <Rating overviewInputConfig={overviewInputConfig} />
            <Vegetarian overviewInputConfig={overviewInputConfig} />
            <Vegan overviewInputConfig={overviewInputConfig} />
          </MultiLineInputRow>
          <MultiLineInputRow>
            <Link overviewInputConfig={overviewInputConfig} />
            <CountrySelect overviewInputConfig={overviewInputConfig} />
          </MultiLineInputRow>
        </div>
        <Image overviewInputConfig={overviewInputConfig} />
      </div>
    </RecipeModule>
  );
}

type MultiLineInputRowTypes = {
  children: ReactNode;
};

function MultiLineInputRow({ children }: MultiLineInputRowTypes) {
  return <div className={styles["multi-input-row"]}>{children}</div>;
}

type InputComponentTypes = {
  overviewInputConfig: any;
};

function Title({ overviewInputConfig }: InputComponentTypes) {
  const TitleComponent = (
    <input
      value={overviewInputConfig.recipeData.title}
      className={styles["title-component"]}
      onChange={(event) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "title",
          event.target.value
        );
      }}
    />
  );

  return (
    <InputLabel
      inputLabelConfig={{
        label: "title",
        inputComponent: TitleComponent,
      }}
    />
  );
}

function CookingTime({ overviewInputConfig }: InputComponentTypes) {
  const TimeComponent = (
    <TextField
      className={styles["override-mui-styles-input"]}
      id="time"
      value={overviewInputConfig.recipeData.cookingTime}
      type="time"
      onChange={(event) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "cookingTime",
          event.target.value
        );
      }}
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={"15:05"}
      sx={{ width: 100 }}
    />
  );

  return (
    <InputLabel
      inputLabelConfig={{
        label: "cooking time (hours & minutes)",
        inputSize: "small",
        inputType: "custom",
        inputComponent: TimeComponent,
      }}
    />
  );
}

function ServingNumber({ overviewInputConfig }: InputComponentTypes) {
  const ServingNumberComponent = (
    <TextField
      onChange={(event) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "defaultServingNumber",
          event.target.value
        );
      }}
      value={overviewInputConfig.recipeData.defaultServingNumber}
      className={`${styles["override-mui-styles-input"]} ${styles["default-serving-number"]}`}
      id="number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );

  return (
    <InputLabel
      inputLabelConfig={{
        inputType: "custom",
        label: "default serving number",
        inputComponent: ServingNumberComponent,
      }}
    />
  );
}

function Price({ overviewInputConfig }: InputComponentTypes) {
  const PriceComponent = (
    <CurrencyInput
      onValueChange={(value) => {
        overviewInputConfig.handleUpdateOverviewBlock("price", value);
      }}
      value={overviewInputConfig.recipeData.price}
      className={styles["currency-input"]}
      prefix="£"
      decimalsLimit={2}
      step={0.01}
    />
  );

  return (
    <InputLabel
      inputLabelConfig={{
        label: "appoximate price per serving",
        inputComponent: PriceComponent,
      }}
    />
  );
}

function Directories({ overviewInputConfig }: InputComponentTypes) {
  const returnSubDirectoryOptions = () => {
    if (overviewInputConfig.recipeData.rootDirectory) {
      return directories[
        directories.findIndex((directory) => {
          return (
            directory.value === overviewInputConfig.recipeData.rootDirectory
          );
        })
      ].subdirectory;
    }
  };

  const RootDirectoriesComponent = (
    <InputSelect
      className={`${styles["select-directory"]}`}
      options={directories}
      onChange={(event: any) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "rootDirectory",
          event.target.value
        );
      }}
      value={overviewInputConfig.recipeData.rootDirectory}
    />
  );

  const SubdirectoriesComponent = (
    <InputSelect
      className={`${styles["select-directory"]}`}
      options={returnSubDirectoryOptions()}
      value={overviewInputConfig.recipeData.subDirectory}
      onChange={(event: any) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "subDirectory",
          event.target.value
        );
      }}
    />
  );

  return (
    <>
      <InputLabel
        inputLabelConfig={{
          label: "root directory",
          inputType: "custom",
          inputComponent: RootDirectoriesComponent,
        }}
      />
      {/* {overviewInputConfig.recipeData.rootDirectory && (
        <InputLabel
          inputLabelConfig={{
            label: "subdirectory",
            inputType: "custom",
            inputComponent: SubdirectoriesComponent,
          }}
        />
      )} */}
    </>
  );
}

function Rating({ overviewInputConfig }: InputComponentTypes) {
  return (
    <InputLabel
      inputLabelConfig={{
        label: "rating",
        inputType: "custom",
        inputComponent: (
          <InputRating
            propsOnClick={(value: any) => {
              overviewInputConfig.handleUpdateOverviewBlock("rating", value);
            }}
            propsInitialValue={overviewInputConfig.recipeData.rating}
            propsClassName={styles["rating"]}
          />
        ),
      }}
    />
  );
}

function Vegetarian({ overviewInputConfig }: InputComponentTypes) {
  return (
    <InputLabel
      inputLabelConfig={{
        inputComponent: returnCheckboxComponent(
          overviewInputConfig,
          "vegetarian"
        ),
        label: "vegetarian",
        inputType: "checkbox",
      }}
    />
  );
}

function Vegan({ overviewInputConfig }: InputComponentTypes) {
  return (
    <InputLabel
      inputLabelConfig={{
        inputComponent: returnCheckboxComponent(overviewInputConfig, "vegan"),
        label: "vegan",
        inputType: "checkbox",
      }}
    />
  );
}

function Link({ overviewInputConfig }: InputComponentTypes) {
  const LinkComponent = (
    <input
      value={overviewInputConfig.recipeData.link}
      onChange={(event) => {
        overviewInputConfig.handleUpdateOverviewBlock(
          "link",
          event.target.value
        );
      }}
      className={styles["link-component"]}
    />
  );

  return (
    <InputLabel
      inputLabelConfig={{
        inputComponent: LinkComponent,
        label: "link",
      }}
    />
  );
}

function CountrySelect({ overviewInputConfig }: InputComponentTypes) {
  return (
    <InputLabel
      inputLabelConfig={{
        label: "country",
        inputComponent: (
          <CountrySelectComponent overviewInputConfig={overviewInputConfig} />
        ),
      }}
    />
  );
}

function CountrySelectComponent({ overviewInputConfig }: InputComponentTypes) {
  let selectedCountry = overviewInputConfig.recipeData.country;

  const buttonRef: any = useRef(null);
  const profileDropdownRef: any = useRef(null);

  const { open, setOpen } = useClickOutsideClose(handleClickOutside);

  function handleClickOutside(event: any) {
    if (
      !buttonRef.current?.contains(event.target) &&
      !profileDropdownRef.current?.contains(event.target)
    ) {
      setOpen(false);
    }
  }

  return (
    <div className={styles["country-option-master-container"]}>
      <img
        ref={buttonRef}
        className={styles["country-option-image"]}
        src={selectedCountry.image}
        alt={selectedCountry.label}
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div
          ref={profileDropdownRef}
          className={styles["country-option-drop-down"]}
        >
          {countries.map((country, index) => {
            return (
              <img
                className={styles["country-option-image"]}
                src={country.image}
                alt={country.label}
                onClick={() => {
                  overviewInputConfig.handleUpdateOverviewBlock(
                    "country",
                    countries[index]
                  );
                  setOpen(false);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function Image({ overviewInputConfig }: InputComponentTypes) {
  const path = overviewInputConfig.recipeData.image;
  const setPath = overviewInputConfig.handleUpdateOverviewBlock;

  const [preview, setPreview] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      // const base64File = imageTest();

      // setPreview(URL.createObjectURL(acceptedFiles[0]));
      setPath(URL.createObjectURL(acceptedFiles[0]));

      // const baseTest = convertToBase64(URL.createObjectURL(acceptedFiles[0]));

      // console.log(baseTest);

      // setPath("image", base64File);

      // async function imageTest() {
      //   const base64 = await convertToBase64(acceptedFiles[0]);
      //   return base64;
      // }
    },
    [setPath]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });

  return (
    <div {...getRootProps()} className={styles["image-container"]}>
      <input {...getInputProps()} />
      {!preview && (
        <>
          <ImageIcon />
          <div className={styles["image-container-big-text"]}>add image</div>
          <div className={styles["image-container-small-text"]}>
            drag-drop or click here to choose the file //{" "}
          </div>
        </>
      )}
      {path && <img key={path} src={path} alt={"recipe"} />}
    </div>
  );
}

export { CreateRecipeOverview };
