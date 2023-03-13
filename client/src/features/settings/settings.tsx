import React from "react";
import { MainLayout } from "common/components/layout/main-layout";
import styles from "./_home.module.scss";
import { ReactComponent as SettingsIcon } from "assets/icons/gear-light.svg";
import { GeneralHeading } from "common/components/general-heading";

function Settings() {
  return (
    <MainLayout backgroundId="pinic">
      <GeneralHeading heading="settings" icon={<SettingsIcon />} />
    </MainLayout>
  );
}

export { Settings };
