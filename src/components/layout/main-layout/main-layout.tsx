import React, { ReactNode } from "react";
import { Header } from "components/header";
import { Sidebar } from "components/sidebar";
import styles from "./_main-layout.module.scss";

type Props = {
  children?: ReactNode;
  backgroundStyle?: {};
};

function MainLayout({ children, backgroundStyle }: Props) {
  const [open, setOpen] = React.useState(false);

  const toggleSidebarOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Header toggleSidebarOpen={toggleSidebarOpen} />
      <Sidebar open={open} toggleSidebarOpen={toggleSidebarOpen} />
      <div className={`${styles["main-content"]}`} style={backgroundStyle}>
        {children}
      </div>
    </div>
  );
}

export { MainLayout };
