"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderTabItems from "./OrderTabItems";
 
const OrderTab = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("menu.json");
      const result = res.data;
      setMenus(result);
    };
    fetchData();
  }, []);
  const pizza = menus?.filter((item) => item.category === "pizza");
  const soup = menus?.filter((item) => item.category === "soup");
  const salad = menus?.filter((item) => item.category === "salad");
  const dessert = menus?.filter((item) => item.category === "dessert");
  const drinks = menus?.filter((item) => item.category === "drinks");
  return (
    <div className="container mt-10 px-2">
      <Tabs>
        <TabList className="flex gap-5 w-full px-2 md:w-1/2 mb-10">
          <Tab className="flex focus:outline-none justify-center items-center cursor-pointer w-32 h-14 default-tab bg-[#f9fafc]">
            Pizza
          </Tab>
          <Tab className="flex justify-center focus:outline-none items-center cursor-pointer w-32 h-14 default-tab bg-[#f9fafc]">
            Soup
          </Tab>
          <Tab className="flex justify-center focus:outline-none items-center cursor-pointer w-32 h-14 default-tab bg-[#f9fafc]">
            Salad
          </Tab>
          <Tab className="flex justify-center focus:outline-none items-center cursor-pointer w-32 h-14 default-tab bg-[#f9fafc]">
            Dessert
          </Tab>
          <Tab className="flex justify-center focus:outline-none items-center cursor-pointer w-32 h-14 default-tab bg-[#f9fafc]">
            Drinks
          </Tab>
        </TabList>
         {/* tab panel */}
        <TabPanel>
          <OrderTabItems menuItems={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTabItems menuItems={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTabItems menuItems={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTabItems menuItems={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTabItems menuItems={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderTab;
