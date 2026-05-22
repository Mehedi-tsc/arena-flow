import Banner from "@/components/homepage/Banner";
import FeaturedFacilities from "@/components/homepage/FeaturedFacilities";
import PlatformStats from "@/components/homepage/PlatformStats";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Image from "next/image";
export const metadata = {
  title: "Arena Flow || Home",
  
};

export default function Home() {
  return (
    <div>
     <Banner/>
     <FeaturedFacilities/>
     <PlatformStats/>
     <WhyChooseUs/>
    </div>
  );
}
