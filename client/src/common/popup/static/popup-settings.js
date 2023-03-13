export const RESET_POPUP_SETTINGS = {
  popupMessage: "",
  backdrop: { activated: false, blur: false },
  popupTitle: "",
  display: false,
  popupId: "",
  actions: [],
  popupType: "",
  cross: true,
};

export const DEFAULT_POPUP_SETTINGS_POPUP = {
  popupMessage: "",
  backdrop: { activated: true, blur: false },
  popupTitle: "",
  display: true,
  popupId: "",
  actions: [],
  popupType: "popup",
  cross: true,
};

export const LOADING_POPUP_SETTINGS = {
  popupMessage: "",
  backdrop: { activated: true, blur: false },
  popupTitle: "loading",
  display: true,
  popupId: "loading",
  actions: [],
  popupType: "popup",
  cross: false,
};
