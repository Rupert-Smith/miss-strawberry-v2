import {
  DEFAULT_POPUP_SETTINGS_POPUP,
  RESET_POPUP_SETTINGS,
  LOADING_POPUP_SETTINGS,
} from "../static/popup-settings";
import { useContext } from "react";
import PopupContextProvider from "common/popup/store/popup-context";

// actionText, actionFunction, actionId

const usePopupConfigActions = () => {
  const setPopupSettings: any =
    useContext(PopupContextProvider).popupConfigHandler;

  const resetPopupConfig = () => {
    setPopupSettings(RESET_POPUP_SETTINGS);
  };

  const loading = (loading: boolean = true) => {
    if (loading) setPopupSettings(LOADING_POPUP_SETTINGS);
    if (!loading) resetPopupConfig();
  };

  const errorDefault = (
    popupMessage: string = "something went wrong",
    popupTitle: string = "error"
  ) => {
    setPopupSettings({
      ...DEFAULT_POPUP_SETTINGS_POPUP,
      popupId: "error",
      popupMessage,
      popupTitle,
    });
  };

  const successDefault = (
    popupMessage: string = "success!",
    popupTitle: string = "success!"
  ) => {
    setPopupSettings({
      ...DEFAULT_POPUP_SETTINGS_POPUP,
      popupId: "success",
      popupMessage,
      popupTitle,
    });
  };

  const successCustomButtons = (
    popupMessage: string = "success!",
    actions: any,
    popupTitle: string = "success!"
  ) => {
    setPopupSettings({
      ...DEFAULT_POPUP_SETTINGS_POPUP,
      popupId: "success",
      popupMessage,
      popupTitle: popupTitle || DEFAULT_POPUP_SETTINGS_POPUP.popupTitle,
      actions,
    });
  };

  const successCustomButtonsNoCross = (
    popupMessage: string = "success!",
    actions: any,
    popupTitle: string = "success!"
  ) => {
    setPopupSettings({
      ...DEFAULT_POPUP_SETTINGS_POPUP,
      popupId: "success",
      popupMessage,
      popupTitle,
      actions,
      cross: false,
    });
  };

  const warningCustomButtons = (
    popupMessage: string = "warning!",
    actions: any,
    popupTitle: string = "warning"
  ) => {
    setPopupSettings({
      ...DEFAULT_POPUP_SETTINGS_POPUP,
      popupId: "warning",
      popupMessage,
      popupTitle,
      actions,
    });
  };

  const closePopupDefault = () => {
    resetPopupConfig();
  };

  const actions = {
    closePopupDefault,
    loading,
    errorDefault,
    successDefault,
    warningCustomButtons,
    successCustomButtons,
    successCustomButtonsNoCross,
  };

  return actions;
};

export default usePopupConfigActions;
