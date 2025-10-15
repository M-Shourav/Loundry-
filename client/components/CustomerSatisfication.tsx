import React from "react";
import Container from "./Container";

const CustomerSatisfication = () => {
  return (
    <div className="w-full">
      <Container className="py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" border-r-1 border-r-black/50">
            <h2 className="text-8xl font-extrabold">
              90<span className="text-6xl text-amber-200">%</span>
            </h2>
            <p className="text-xl font-medium mt-4">
              Of our customers enjoy the time-saving convenience of our reliable
              pickup and delivery service.
            </p>
          </div>
          <div className=" border-r-1 border-r-black/50">
            <h2 className="text-8xl font-extrabold">
              99<span className="text-6xl text-amber-200">%</span>
            </h2>
            <p className="text-xl font-medium mt-4">
              Customer satisfaction rate with our expert dry cleaning service,
              perfect for delicate and professional garments.
            </p>
          </div>
          <div className=" border-r-1 border-r-black/50">
            <h2 className="text-8xl font-extrabold">
              100<span className="text-6xl text-amber-200">%</span>
            </h2>
            <p className="text-xl font-medium mt-4">
              Of our detergents and cleaning agents are eco-friendly, ensuring
              safe and gentle care for your clothes and the environment.
            </p>
          </div>
          <div className=" border-r-1 border-r-black/50">
            <h2 className="text-8xl font-extrabold">
              20<span className="text-6xl text-amber-200">%</span>
            </h2>
            <p className="text-xl font-medium mt-4">
              Lower prices on average compared to other premium laundry
              services, providing exceptional value without compromising
              quality.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerSatisfication;
