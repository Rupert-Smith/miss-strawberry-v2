import React from "react";
import { MainLayout } from "components/layout/main-layout";
import styles from "./_home.module.scss";
import { ReactComponent as SettingsIcon } from "assets/icons/gear-light.svg";
import { PageHeading } from "components/page-heading";

function Settings() {
  return (
    <MainLayout
      backgroundStyle={{
        // height: "90vh",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <PageHeading heading="settings" icon={<SettingsIcon />} />
    </MainLayout>
  );
}

export { Settings };
