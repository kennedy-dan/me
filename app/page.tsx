
import Clients from "@/components/Home/Client";
import Hero from "@/components/Home/Hero";
import Meetme from "@/components/Home/MeetMe";
import MyProjects from "@/components/Home/MyProjects";
import Recommendations from "@/components/Home/Recommendations";
import Showcase from "@/components/Home/Showcase";
import Superpowers from "@/components/Home/Superpowers";
import MasterLayout from "@/components/layout/Layout";


export default function HomePage() {
  return (
   <MasterLayout>
      <Hero />
      <Superpowers />
      <Clients />
      <MyProjects />
      <Meetme />
      <Recommendations />
      <Showcase />
   </MasterLayout>
  );
}