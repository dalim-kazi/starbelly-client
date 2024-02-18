import Banner from "@/components/Homes/Banner/Banner";
import CookMan from "@/components/Homes/CookMan/CookMan";
import Experiences from "@/components/Homes/Experiences/Experiences";
import FreeDelivery from "@/components/Homes/FreeDelivery/FreeDelivery";
import MostPopular from "@/components/Homes/MostPopular/Mostpopular";
import Today from "@/components/Homes/Today/Today";

export default async function Home() {
  return (
    <main>
      <Banner />
      <Experiences />
      <Today />
      <MostPopular />
      <CookMan />
      <FreeDelivery />
    </main>
  );
}
