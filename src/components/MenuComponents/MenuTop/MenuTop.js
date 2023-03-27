import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/img/png/Logo.png";
import "./MenuTop.scss";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;

  const userLogout = () => console.log("Diste clic en logout");
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left__logo"
          src={Logo}
          alt="Logo empresa"
        ></img>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={userLogout}>
          <UserOutlined />
        </Button>
      </div>
    </div>
  );
};
