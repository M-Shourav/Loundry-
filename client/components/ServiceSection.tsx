import React from "react";
import Container from "./Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import {
  tabsBg1,
  tabsBg2,
  tabsBg3,
  tabsBg4,
  tabsBg5,
  tabsBg6,
} from "@/public/images";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const ServiceSection = () => {
  return (
    <section>
      <Container className="py-20 flex flex-col gap-y-10">
        <div className=" flex flex-col items-center justify-start gap-y-4">
          <h2 className="text-7xl font-extrabold text-center">Service</h2>
          <p className=" max-w-2xl mx-auto text-lg font-normal text-center">
            Established with the mission to simplify your life and elevate your
            laundry experience, we bring a blend of modern technology and
            eco-friendly practices.
          </p>
        </div>
        <div className="">
          <Tabs defaultValue="wash&fold">
            <TabsList className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <TabsTrigger value="wash&fold" className="">
                Wash & Fold
              </TabsTrigger>
              <TabsTrigger value="dryCleaning">Dry Cleaning</TabsTrigger>
              <TabsTrigger value="pickup">Pickup & Delivery</TabsTrigger>
              <TabsTrigger value="ironing">Ironing Service</TabsTrigger>
              <TabsTrigger value="stainRemoval">Stain Removal</TabsTrigger>
              <TabsTrigger value="commercialLaundry">
                Commercial Laundry
              </TabsTrigger>
            </TabsList>
            <TabsContent value={"wash&fold"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Stain Wizardry Services
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        From red wine mishaps to grease disasters, our expert
                        stain removal specialists have the potions and spells to
                        make them disappear. Trust us to rescue your garments
                        and restore them to their pristine condition, saving
                        your favorite pieces one stain at a time.
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Time Savings</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Comprehensive Approach
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Perfect Folding
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Expert Care</h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg1}
                    alt="tabs_1-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value={"dryCleaning"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Gentle Fabric Revival
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        From delicate silks to tailored suits, trust us to
                        restore your garments to their former glory with our
                        expert dry cleaning methods. Rediscover the joy of
                        wearing your favorite pieces, perfectly cleaned and
                        refreshed.
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Expert Care</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Convenience</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Garment Preservation
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Reliable Service
                        </h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg2}
                    alt="tabs_1-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value={"pickup"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Green Clean Solutions
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        With flexible subscription plans tailored to your needs,
                        enjoy the convenience of regular pickups and deliveries,
                        leaving you with more time for the things you love. Say
                        hello to hassle-free laundry, and goodbye to laundry day
                        stress!
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Cost-Effective
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Peace of Mind</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Time Savings</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Attention to Detail
                        </h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg3}
                    alt="tabs_1-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value={"ironing"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Laundry Harmony Membership
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        Harnessing the power of eco-friendly detergents and
                        sustainable practices, we ensure your laundry is not
                        only impeccably clean but also environmentally
                        responsible. Make a positive impact with every wash, one
                        load at a time.
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Professional Results
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Enhanced Appearance
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Time-Saving Convenience
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Customized Care
                        </h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg4}
                    alt="tabs_1-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value={"stainRemoval"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Stain Wizardry Services
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        From red wine mishaps to grease disasters, our expert
                        stain removal specialists have the potions and spells to
                        make them disappear. Trust us to rescue your garments
                        and restore them to their pristine condition, saving
                        your favorite pieces one stain at a time.
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Time Savings</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Comprehensive Approach
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Perfect Folding
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Expert Care</h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg5}
                    alt="tabs_1-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value={"commercialLaundry"}>
              <Card className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <h2 className="text-4xl font-extrabold">
                        Professional Linen Solutions
                      </h2>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl ">
                        Your garments are unique, and so is our approach. We
                        tailor our services to meet your specific preferences,
                        from washing instructions to folding techniques.
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5">
                    <h3 className="text-xl font-semibold uppercase">
                      What we offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">Expert Care</h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Attention to Detail
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Customized Solutions
                        </h4>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-amber-200">
                          <Check size={40} />
                        </span>
                        <h4 className="text-base font-normal">
                          Quality Cleaning
                        </h4>
                      </div>
                    </div>
                    <Button className=" mt-10 bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
                      Start Cleaning
                    </Button>
                  </CardContent>
                </div>
                <div className="p-4 w-full h-full">
                  <Image
                    src={tabsBg6}
                    alt="tabs_6-image"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
