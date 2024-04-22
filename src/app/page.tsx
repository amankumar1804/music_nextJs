import HeroSection from "@/components/HeroSection";
// import Image from "next/image";
import FeaturedCourses from '@/components/FeaturedCourses' ;
import Testimonial from "@/components/Testimonial";
// import { Gridbackground } from "@/components/Gridbackground";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
           <h1 className="text-center text-2xl"></h1>
          
           <HeroSection></HeroSection>
           <FeaturedCourses />
           < Testimonial />
           <UpcommingWebinar />
           <WhyChooseUs />
          <Footer />

        
    </main>
    
  );
}
