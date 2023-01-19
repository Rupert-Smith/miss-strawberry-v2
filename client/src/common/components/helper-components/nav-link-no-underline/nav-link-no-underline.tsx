import styles from "./_nav-link-no-underline.module.scss";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type HeaderProps = {
  to: string;
  className?: string;
  children: ReactNode;
};

function NavLinkNoUnderline({ to, className, children }: HeaderProps) {
  return (
    <NavLink className={`${styles["nav-link-element"]}`} to={to}>
      {children}
    </NavLink>
  );
}

export { NavLinkNoUnderline };
