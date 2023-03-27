import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  TeamOutlined,
  AppstoreOutlined,
  BankOutlined,
} from "@ant-design/icons";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "/admin", icon: <BankOutlined />, label: <span>Inicio</span> },
    {
      key: "/admin-users",
      icon: <TeamOutlined />,
      label: <span>Usuarios</span>,
    },
    {
      key: "/admin-products",
      icon: <AppstoreOutlined />,
      label: <span>Productos</span>,
    },
    {
      key: "/admin-services",
      icon: <AppstoreOutlined />,
      label: <span>Servicios</span>,
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        className="menu-sider"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={menuItems}
        onClick={navigateTo}
      />
    </Sider>
  );
};
