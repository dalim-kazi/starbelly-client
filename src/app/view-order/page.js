import dynamic from "next/dynamic";
import ViewOrderPageCover from "@/components/ViewOrderPage/ViewOrderPageCover";
import React from "react";
const DynamicViewOrder = dynamic(
  () => import("@/components/ViewOrderPage/ViewOrder"),
  {
    ssr: false,
  }
);
const ViewOrderPage = () => {
  return (
    <div className="mt-20">
      <ViewOrderPageCover />
      <DynamicViewOrder />
    </div>
  );
};

export default ViewOrderPage;
