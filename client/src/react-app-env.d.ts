/// <reference types="react-scripts" />

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "redux-persist/lib/storage" {
  const storage: any;
  export default storage;
}
