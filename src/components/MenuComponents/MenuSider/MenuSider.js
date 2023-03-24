import React from "react";
import { Menu, Layout } from "antd";
import {
  TeamOutlined,
  AppstoreOutlined,
  BankOutlined,
} from "@ant-design/icons";

export const MenuSider = () => {
  const { Sider } = Layout;
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
  return (
    <Sider>
      <Menu mode= "inline" items={menuItems} />
    </Sider>
  );
};
