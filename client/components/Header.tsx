import React from "react";
import Container from "./Container";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <section>
      <div className="w-full h-20">
        <Container className=" h-full flex items-center justify-between gap-4">
          <div>logo</div>
          <div className="hidden md:inline-flex">
            <Navigation />
          </div>
          <div className="md:hidden">MobileMenu</div>
        </Container>
      </div>
    </section>
  );
};

export default Header;
