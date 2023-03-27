import React, { useState } from "react";
import { Button, Layout } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
import { GithubOutlined } from "@ant-design/icons";
import './GeneralLayout.scss';

export const GeneralLayout = (props) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-general"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-general__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button type="link" onClick={() => console.log("Ir a github")}>
            <GithubOutlined style={{ fontSize: "17px" }} />
          </Button>
        </Footer>
      </Layout>
    </Layout>
  );
};
