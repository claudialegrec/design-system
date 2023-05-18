import React from "react";
import { useTranslation } from "react-i18next";
import "./home.scss";

export function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className="test">Sidebar</div>
    </>
  );
};
