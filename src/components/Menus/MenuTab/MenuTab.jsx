"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabItems from "./TabItems";
import { useAllMenus } from "@/Hook/Usemenus";
import Spinner from "@/components/Spinner/Spinner";
const MenuTab = () => {
  const { allMenus, isLoading } = useAllMenus();
  const pizza = allMenus?.filter((item) => item.category === "pizza");
  const soup = allMenus?.filter((item) => item.category === "soup");
  const salad = allMenus?.filter((item) => item.category === "salad");
  const dessert = allMenus?.filter((item) => item.category === "dessert");
  const drinks = allMenus?.filter((item) => item.category === "drinks");
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
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
          <TabItems menuItems={pizza} />
        </TabPanel>
        <TabPanel>
          <TabItems menuItems={soup} />
        </TabPanel>
        <TabPanel>
          <TabItems menuItems={salad} />
        </TabPanel>
        <TabPanel>
          <TabItems menuItems={dessert} />
        </TabPanel>
        <TabPanel>
          <TabItems menuItems={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuTab;
