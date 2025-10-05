import React from "react";
import Container from "./Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { laundry, map, security } from "@/public/images";

const Banner = () => {
  return (
    <section>
      <Container className="py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-extrabold leading-[40px] uppercase">
            your trusted partner in achieving pristine.
          </h2>
          <p className="text-xl font-normal">
            Established with the mission to simplify your life and elevate your
            laundry experience, we bring a blend of modern technology and
            eco-friendly practices.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
          <Card className="group relative">
            <div className=" absolute inset-0 bg-amber-200 -z-1 rounded-2xl group-hover:-rotate-5 duration-300" />
            <CardHeader>
              <CardTitle className="bg-gray-200 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-amber-200 duration-500">
                <Image
                  src={map}
                  alt="map-image"
                  className=" group-hover:rotate-y-180 duration-700"
                />
              </CardTitle>
              <CardDescription className="text-black uppercase mt-5">
                <h3 className="text-xl font-semibold">
                  Convenient Pickup & Delivery
                </h3>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-base font-normal">
                Enjoy the convenience of our pickup and delivery service,
                designed to fit seamlessly into your schedule. Say goodbye to
                the hassle of laundry day and let us come to you.
              </p>
            </CardContent>
          </Card>{" "}
          <Card className="group relative">
            <div className=" absolute inset-0 bg-amber-200 -z-1 rounded-2xl group-hover:-rotate-5 duration-300" />
            <CardHeader>
              <CardTitle className="bg-gray-200 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-amber-200 duration-500">
                <Image
                  src={security}
                  alt="map-image"
                  className=" group-hover:rotate-y-180 duration-700"
                />
              </CardTitle>
              <CardDescription className="text-black uppercase mt-5">
                <h3 className="text-xl font-semibold">Eco-Friendly Products</h3>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-base font-normal">
                We prioritize your health and the environment by using only
                eco-friendly detergents and cleaning agents, ensuring your
                clothes are safe and fresh without harmful chemicals.
              </p>
            </CardContent>
          </Card>
          <Card className="group relative">
            <div className=" absolute inset-0 bg-amber-200 -z-1 rounded-2xl group-hover:-rotate-5 duration-300" />
            <CardHeader>
              <CardTitle className="bg-gray-200 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-amber-200 duration-500">
                <Image
                  src={laundry}
                  alt="map-image"
                  className=" group-hover:rotate-y-180 duration-700"
                />
              </CardTitle>
              <CardDescription className="text-black uppercase mt-5">
                <h3 className="text-xl font-semibold">
                  Professional Dry Cleaning
                </h3>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-base font-normal">
                Trust our expertise in dry cleaning to maintain the integrity
                and beauty of your delicate and professional attire. We handle
                each item with precision to ensure a flawless finish
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
