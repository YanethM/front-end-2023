import React from "react";
import { Layout } from "antd";
export const GeneralLayout = (props) => {
  const { children } = props;
  return (
    <Layout>
      <h2>Menú</h2>
      <div>Contenido</div>
      <h2>Footer</h2>
      {children}
    </Layout>
  );
};
