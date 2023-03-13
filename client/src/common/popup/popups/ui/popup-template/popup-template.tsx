import { ReactNode } from "react";
import { ReactComponent as CrossIcon } from "assets/icons/xmark-solid.svg";
import styles from "./_popup-template.module.scss";
import { SquareButton } from "common/components/buttons/square-button";
import { TypeActions } from "common/types/action-types";
import usePopupConfigActions from "common/popup/hooks/use-popup-config-actions";

type CardProps = {
  children?: ReactNode;
  propsClassName?: string;
  ref?: any;
};

function Popup({ children, propsClassName }: CardProps) {
  return (
    <div className={`${styles["popup-template-container"]} ${propsClassName}`}>
      {children}
    </div>
  );
}

type CardHeadProps = {
  children?: ReactNode;
  propsClassName: string;
  propsHeaderText: string;
  propsIcon: ReactNode;
  closeButton: boolean;
};

function PopupHead({
  propsClassName,
  propsIcon,
  propsHeaderText,
  closeButton,
}: CardHeadProps) {
  const { closePopupDefault } = usePopupConfigActions();

  return (
    <div className={`${styles["popup-template-header"]} ${propsClassName}`}>
      {propsIcon}
      <div className={`${styles["header-text"]}`}>{propsHeaderText}</div>
      {closeButton && (
        <CrossIcon
          onClick={closePopupDefault}
          className={`${styles["cross"]}`}
        />
      )}
    </div>
  );
}

type CardBodyProps = {
  children?: ReactNode;
  propsClassName?: string;
};

function PopupBody({ children, propsClassName }: CardBodyProps) {
  return (
    <div className={`${styles["popup-template-body"]} ${propsClassName}`}>
      {children}
    </div>
  );
}

type CardMessageProps = {
  children?: ReactNode;
  propsClassName?: string;
  propsMessage: string;
};

function PopupMessage({ propsClassName, propsMessage }: CardMessageProps) {
  return (
    <div className={`${styles["popup-template-message"]} ${propsClassName}`}>
      {propsMessage}
    </div>
  );
}

type PopupButtonBlockProps = {
  children?: ReactNode;
  propsActions?: TypeActions[];
};

function PopupButtonBlock({ propsActions }: PopupButtonBlockProps) {
  const { closePopupDefault, loading } = usePopupConfigActions();

  let actions = propsActions ? [...propsActions] : [];

  // Here we give functions and text to the actions that only have an id

  actions.forEach((action) => {
    switch (action.actionId) {
      case "cancel":
        action.actionText = "cancel";
        action.actionFunction = closePopupDefault;
        break;
    }
  });

  // here, we are re-ordering the actions so that 'cancel' will always appear on the right.
  // If there is only one then there is no need to do this

  if (actions.length > 1) {
    // Here we are moving the 'cancel' button to the end of the array so it will always appear on the far right hand side
    let index = actions.findIndex((action) => action.actionId === "cancel");
    // The index will return as -1 if 'cancel' is not found
    if (index > -1) {
      let cancel = actions[index];
      actions.splice(index, 1);
      actions.push(cancel);
    }
  }

  return (
    <div className={`${styles["button-container"]}`}>
      {actions?.map((action) => {
        return (
          <SquareButton
            key={action.actionId}
            propsClassName={`${styles["pink-button"]}`}
            buttonText={action.actionText || ""}
            propsOnClick={() => {
              if (action.actionFunction) {
                action.actionFunction();
              }
              if (action.triggerLoading) {
                loading();
              }
              if (!action.triggerLoading) {
                closePopupDefault();
              }
            }}
          />
        );
      })}
    </div>
  );
}

export { PopupBody, PopupHead, Popup, PopupMessage, PopupButtonBlock };
