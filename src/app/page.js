import Banner from "@/components/Homes/Banner/Banner";
import CookMan from "@/components/Homes/CookMan/CookMan";
import Experiences from "@/components/Homes/Experiences/Experiences";
import FreeDelivery from "@/components/Homes/FreeDelivery/FreeDelivery";
import MostPopular from "@/components/Homes/MostPopular/Mostpopular";
import Today from "@/components/Homes/Today/Today";

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://dev.nusaiba.com.bd/news-blog/unlocking-the-potential-of-digital-innovation-with-cybercraft-bangladesh-1",
    },
    headline:
      "Unlocking the Potential of Digital Innovation with CyberCraft Bangladesh",
    description:
      "Unlocking the Potential of Digital Innovation with CyberCraft Bangladesh",
    image:
      "https://snapstore.nusaiba.com.bd/uploads/nusaiba.c…angabandhu-Sheikh-Mujibur-Rahman-Novo-Theatre.jpg",
    author: {
      "@type": "Organization",
      name: "dalim",
      url: "https://snapstore.nusaiba.com.bd/uploads/nusaiba.c…angabandhu-Sheikh-Mujibur-Rahman-Novo-Theatre.jpg",
    },
    publisher: {
      "@type": "Organization",
      name: "4/19/2024",
      logo: {
        "@type": "ImageObject",
        url: "https://snapstore.nusaiba.com.bd/uploads/nusaiba.c…angabandhu-Sheikh-Mujibur-Rahman-Novo-Theatre.jpg",
      },
    },
    datePublished: "2024-04-19",
    dateModified: "2024-04-19",
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner />
      <Experiences />
      <Today />
      <MostPopular />
      <CookMan />
      <FreeDelivery />
    </main>
  );
}
