import React from "react";
import Container from "./Container";
import { machine_1 } from "@/public/images";
import Image from "next/image";
import { Clock, FileBadge2, Sprout } from "lucide-react";
import { Button } from "./ui/button";

const WhyChoose = () => {
  return (
    <Container className=" py-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image src={machine_1} alt="laundry-machine image" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold uppercase">Why Choose us</h2>
          <p className="text-2xl mt-4">
            Experience the ultimate in convenience and quality with Bubbles
            Laundry Services&apos; Wash & Fold.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            <div className="bg-white rounded-md p-6 flex items-start gap-4">
              <div className="w-20 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                <Clock />
              </div>
              <div>
                <h3 className=" uppercase text-xl font-bold">Time Saving</h3>
                <p className="text-lg mt-2">
                  Free up your valuable time for more important things while we
                  handle your laundry.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md p-6 flex items-start gap-4">
              <div className="w-20 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                <FileBadge2 />
              </div>
              <div>
                <h3 className=" uppercase text-xl font-bold">
                  High-Quality Care
                </h3>
                <p className="text-lg mt-2">
                  Our professional team treats your clothes with the utmost
                  care, ensuring they look and feel their best.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md p-6 flex items-start gap-4">
              <div className="w-20 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                <Sprout />
              </div>
              <div>
                <h3 className=" uppercase text-xl font-bold">
                  Eco-Friendly Products
                </h3>
                <p className="text-lg mt-2">
                  We use safe, environmentally friendly detergents that are
                  tough on stains but gentle on your clothes and skin.
                </p>
              </div>
            </div>
            <Button className="mt-10 px-9 py-7 w-fit rounded-full bg-amber-300 text-black text-xl font-semibold hover:text-amber-200 duration-300">
              Start Cleaning
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
