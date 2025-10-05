import React from "react";
import Header from "./Header";
import Container from "./Container";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Header />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className=" absolute inset-0 bg-black/40" />
      <Container className="relative z-10 py-10">
        <div className=" flex flex-col gap-8">
          <h1 className="text-white text-7xl font-bold max-w-2xl">
            Do your {""}
            <span className=" text-amber-200">laundry </span>
            {""}
            smartly
          </h1>
          <p className="text-lg font-semibold text-white max-w-xl">
            Welcome to Bubbles Laundry Services, where we transform your laundry
            day into a breeze!
          </p>
          <Button className=" bg-amber-200 w-[200px] text-black h-16 text-xl hover:text-amber-200 duration-300">
            Start Cleaning
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
