import styles from "./_window-manager.module.scss";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import WindowContextProvider from "../store/window-context";
import { useContext } from "react";
import { About } from "features/about";
import { Backdrop } from "common/components/backdrops/backdrop";
import useWindowConfigActions from "../hooks/use-window-config-actions";

type WindowManagerProps = {
  children?: ReactNode;
};

function WindowManager({ children }: WindowManagerProps) {
  const windowConfig: any = useContext(WindowContextProvider).windowConfig;
  const portalElement = document.getElementById("window-overlay")!;

  const { closeWindowDefault } = useWindowConfigActions();

  let windowComponent = <></>;

  switch (windowConfig.windowId) {
    case "about":
      windowComponent = <About />;
      break;
  }

  const exportComponent = (
    <div className={`${styles["master-wrapper"]}`}>
      {windowConfig.backdrop.activated && (
        <Backdrop
          clickBackdrop={closeWindowDefault}
          blur={windowConfig.backdrop.blur}
        />
      )}
      <div className={`${styles["window-wrapper"]}`}>{windowComponent}</div>
      {children}
    </div>
  );

  return <>{createPortal(exportComponent, portalElement)}</>;
}

export { WindowManager };
