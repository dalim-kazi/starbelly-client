import React from "react";
import OrderCard from "./OrderCard";

const OrderTabItems = ({ menuItems }) => {
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
      {menuItems ? (
        menuItems?.map((item) => <OrderCard key={item._id} menu={item} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrderTabItems;
