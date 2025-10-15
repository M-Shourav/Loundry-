import Banner from "@/components/Banner";
import CustomerSatisfication from "@/components/CustomerSatisfication";
import ServiceSection from "@/components/ServiceSection";
import WhyChoose from "@/components/Why-Choose";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceSection />
      <CustomerSatisfication />
      <WhyChoose />
    </div>
  );
};

export default Home;
