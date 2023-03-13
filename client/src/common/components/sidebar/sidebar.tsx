import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import {
//   sidebarOptions,
//   specialSidebarOptions,
// } from "common/components/sidebar/sidebarOptions";
import { ReactComponent as ArrowIcon } from "assets/icons/play-solid.svg";
import styles from "./_sidebar.module.scss";
import variables from "assets/theme/_constants.module.scss";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./sidebar.css";
import Tooltip from "@mui/material/Tooltip";
import useGetSidebarOptions from "./hooks/use-get-sidebar-options";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";

const drawerWidth = 140;

const openedMixin = (theme: Theme): CSSObject => ({
  width: "12.5em",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: variables.sidebarWidth,
  // width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type SidebarProps = {
  open: boolean;
  setSidebar: Function;
};

function Sidebar({ open, setSidebar }: SidebarProps) {
  const disabled = useSelector(
    (state: RootState) => state.sidebarHeader.disabledComponents.sidebar
  );

  const [selectedOption, setSelectedOption] = useState("");

  const { sidebarOptions, specialSidebarOptions } = useGetSidebarOptions();

  const theme = useTheme();

  let tooltipsOn = !disabled && true;

  return (
    // <Box className={styles["test"]} sx={{ display: "flex" }}>
    <>
      <CssBaseline />
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: variables.creamWhite,
            color: variables.nightBlack,
            width: "13.5em",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton />
        </DrawerHeader>
        <List>
          {specialSidebarOptions.map((option, index) => {
            const selected = window.location.href.includes(
              `recipes/${option.label}`
            );

            console.log(selected);

            return (
              <Tooltip
                key={option.label}
                enterDelay={1000}
                title={`${tooltipsOn && !open ? option.label : ""}`}
              >
                <ListItem
                  className={`${
                    disabled
                      ? styles["sidebar-option-disabled"]
                      : styles["sidebar-option"]
                  } ${selected && styles["selected"]}`}
                  key={option.label}
                  disablePadding
                  onClick={() => {
                    if (!disabled) {
                      setSelectedOption(option.label);
                      setSidebar(false);
                      option.onClick();
                    }
                  }}
                >
                  <ListItemButton disableRipple>
                    <div
                      className={`${styles["option-button"]} ${
                        disabled
                          ? styles["disabled"]
                          : styles[option.buttonStyles]
                      }`}
                    >
                      <img
                        style={option.iconStyles}
                        src={option.button}
                        alt={option.label}
                      />
                    </div>
                    <ListItemText
                      sx={{ opacity: open ? 1 : 0 }}
                      primaryTypographyProps={{ style: { fontSize: "0.8em" } }}
                      primary={option.label}
                    />
                    <ArrowIcon className={`${styles["arrow-icon"]}`} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            );
          })}
        </List>
        <Divider />
        <List>
          {sidebarOptions.map((option, index) => {
            const selected = window.location.href.includes(
              `recipes/${option.id}`
            );

            return (
              <Tooltip
                key={option.label}
                enterDelay={1000}
                title={`${tooltipsOn && !open ? option.label : ""}`}
                onClick={() => {
                  if (!disabled) {
                    setSidebar(false);
                    option.onClick();
                  }
                }}
              >
                <ListItem
                  className={`${
                    disabled
                      ? styles["sidebar-option-disabled"]
                      : styles["sidebar-option"]
                  }  ${selected && styles["selected"]}`}
                  disablePadding
                  // onClick={setSidebar}
                >
                  <ListItemButton disableRipple>
                    <div
                      className={`${styles["option-button"]} ${
                        styles[option.buttonStyles]
                      }  ${
                        disabled
                          ? styles["disabled"]
                          : styles[option.buttonStyles]
                      } ${
                        disabled ? styles["disabled"] : styles["not-disabled"]
                      }`}
                      // onClick={setSidebar}
                    >
                      <img
                        style={option.iconStyles}
                        src={option.button}
                        alt={option.label}
                      />
                    </div>
                    <ListItemText
                      sx={{ opacity: open ? 1 : 0 }}
                      primaryTypographyProps={{ style: { fontSize: "0.8em" } }}
                      primary={option.label}
                    />
                    <ArrowIcon className={`${styles["arrow-icon"]}`} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            );
          })}
        </List>
      </Drawer>
    </>
    // </Box>
  );
}

export { Sidebar };
