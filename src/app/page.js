import Banner from "@/components/Homes/Banner/Banner";
import Experiences from "@/components/Homes/Experiences/Experiences";
import FreeDelivery from "@/components/Homes/FreeDelivery/FreeDelivery";
import MostPopular from "@/components/Homes/MostPopular/Mostpopular";
import Today from "@/components/Homes/Today/Today";

 

export default function Home() {
  return (
    <main>
      <Banner />
      <Experiences />
      <Today />
      <MostPopular />
      <FreeDelivery/>
    </main>
  );
}
