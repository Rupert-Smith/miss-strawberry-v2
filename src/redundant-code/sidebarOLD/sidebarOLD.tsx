import React, { useState } from "react";
import styles from "./_sidebar.module.scss";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { sidebarOptions } from "./sidebarOptions";
import variables from "theme/_constants.module.scss";
import { ReactComponent as ArrowIcon } from "assets/icons/play-solid.svg";

function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      // sx={{
      //   width: "10em",
      //   flexShrink: 0,
      //   [`& .MuiDrawer-paper`]: { width: "10em", boxSizing: "border-box" },
      // }}
      PaperProps={{
        sx: {
          backgroundColor: variables.creamWhite,
          color: variables.nightBlack,
          width: "13.5em",
        },
      }}
      variant="permanent"
      anchor="left"
      className={styles["sidebar"]}
    >
      <List>fds</List>
      <Divider />
      <List>
        {sidebarOptions.map((option, index) => (
          <ListItem
            className={styles["sidebar-option"]}
            key={option.label}
            disablePadding
          >
            <ListItemButton disableRipple>
              <div
                className={`${styles["option-button"]} ${
                  styles[option.buttonStyles]
                }`}
                onClick={handleDrawerOpen}
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
        ))}
      </List>
    </Drawer>
  );
}

export { Sidebar };
