"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderTabItems from "./OrderTabItems";
import { useAllMenus } from "@/Hook/Usemenus";
import Spinner from "../Spinner/Spinner";

const OrderTab = () => {
  const { allMenus,isLoading } = useAllMenus();
  const pizza = allMenus?.filter((item) => item.category === "pizza");
  const soup = allMenus?.filter((item) => item.category === "soup");
  const salad = allMenus?.filter((item) => item.category === "salad");
  const dessert = allMenus?.filter((item) => item.category === "dessert");
  const drinks = allMenus?.filter((item) => item.category === "drinks");
  if (isLoading) {
    return <Spinner/>
  }
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
