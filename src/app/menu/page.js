import MenuCover from "@/components/Menus/MenuCover/MenuCover";
import MenuTab from "@/components/Menus/MenuTab/MenuTab";
import React from "react";
import './menu.css'
import Offered from "@/components/Menus/Offered/Offered";
const Menu = () => {
  return (
    <div className="container mb-20">
      <MenuCover />
      <MenuTab />
      <Offered/>
    </div>
  );
};

export default Menu;
