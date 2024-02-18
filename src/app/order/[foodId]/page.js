import FoodDetails from "@/components/FoodDetails/FoodDetails";
import FoodDetailsCover from "@/components/FoodDetails/FoodDetailsCover";
import React from "react";

const FoodDetailsPage = ({ params }) => {
  return (
      <div className="xl:container mt-32 px-5">
          <FoodDetailsCover/>
      <FoodDetails foodId={params} />
    </div>
  );
};

export default FoodDetailsPage;
