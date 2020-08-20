import React from "react";
import { Menu } from "antd";

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>Sign In</Menu.Item>
      <Menu.Item>Sign Out</Menu.Item>
    </Menu>
  );
};

export default Header;
