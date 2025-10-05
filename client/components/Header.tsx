import React from "react";
import Container from "./Container";
import Navigation from "./Navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { BlackLogo, WhiteLogo } from "@/public/images";

const Header = () => {
  return (
    <div className=" relative z-10">
      <div className="w-full h-20">
        <Container className=" h-full flex items-center justify-between gap-4">
          <div>
            <Image src={WhiteLogo} alt="Brand-logo" />
          </div>
          <div className="flex items-center gap-10">
            <Navigation />
            <div className="flex items-center gap-8">
              <Link href={"/"}>
                <ShoppingCart className="text-white" />
              </Link>
              <Button className=" text-black bg-white h-14 w-[150px] text-xl hover:bg-amber-400 duration-300">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:hidden">MobileMenu</div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
