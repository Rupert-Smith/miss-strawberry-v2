import styles from "./_profile-window.module.scss";
import { SquareButton } from "common/components/buttons/square-button";
import { WindowCard } from "../ui/window-card";
import { ReactComponent as SettingsIcon } from "assets/icons/gear-thin.svg";
import { ReactComponent as CameraIcon } from "assets/icons/camera-light.svg";
import { ReactComponent as AboutIcon } from "assets/icons/circle-info-light.svg";
import profilePicture from "assets/images/temp/profile.png";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import useWindowConfigActions from "common/components/window/hooks/use-window-config-actions";
import { DefaultUser } from "common/components/images-and-icons/default-user";
import { useSelector } from "react-redux";
import { RootState } from "store";
import useHandleLogout from "features/auth/logout/hooks/use-handle-logout";

type ProfileWindowProps = {
  closeWindow: Function;
  buttonRef: any;
};

function ProfileWindow({ closeWindow, buttonRef }: ProfileWindowProps) {
  const { handleLogout } = useHandleLogout();

  const profileWindowRef: any = useRef(null);
  const { openWindow } = useWindowConfigActions();
  const navigate = useNavigate();

  const profile = useSelector(
    (state: RootState) => state.profileSettings.profile
  );

  const menuOptions = [
    // {
    //   icon: <SettingsIcon />,
    //   text: "settings",
    //   id: "settings",
    //   onClick: () => {
    //     navigate("/settings");
    //   },
    // },
    {
      icon: <AboutIcon />,
      text: "about",
      id: "about",
      onClick: () => {
        openWindow("about");
      },
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        !profileWindowRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        closeWindow();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <WindowCard
      propsRef={profileWindowRef}
      propsClassName={styles["profile-window-container"]}
    >
      <div className={styles["user-block"]}>
        <ProfilePicture />
        <div className={styles["username"]}>{profile.username}</div>
        <div className={styles["email"]}>{profile.email}</div>
      </div>
      <div className={styles["menu-block"]}>
        {menuOptions.map((menuOption, index) => {
          const oddItem = index % 2 === 0;
          return (
            <div
              onClick={() => {
                menuOption.onClick();
                closeWindow();
              }}
              className={`${styles["menu-item"]} ${
                oddItem ? styles["odd-item"] : styles["even-item"]
              }`}
              key={menuOption.id}
            >
              {menuOption.icon}
              {menuOption.text}
            </div>
          );
        })}
      </div>
      <div className={styles["sign-out-block"]}>
        <SquareButton
          buttonText="log out"
          propsOnClick={() => {
            closeWindow();
            handleLogout();
          }}
        />
      </div>
    </WindowCard>
  );
}

export { ProfileWindow };

const ProfilePicture = () => {
  return (
    <div className={styles["avatar-master-container"]}>
      <DefaultUser
        propsContainerStyle={{
          width: "80px",
          height: "80px",
          borderRadius: "200px",
        }}
        propsIconStyle={{
          width: "33px",
          height: "33px",
        }}
      />
      {/* <Avatar
        className={styles["avatar"]}
        alt="default user"
        src={profilePicture}
      />
      <button className={styles["avatar-camera-button"]}>
        <CameraIcon />
      </button> */}
    </div>
  );
};
