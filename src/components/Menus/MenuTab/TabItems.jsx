import React from "react";
import MenuCard from "../MenusCard/MenuCard";

const TabItems = ({ menuItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between w-full">
      {menuItems ? (
        menuItems?.map((item) => <MenuCard key={item._id} menu={item} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default TabItems;
