'use client';

import React, { useState } from "react";
import { Hero } from "@/components/animated-hero";
import { Navbar,NavBody,NavItems,MobileNav,MobileNavHeader,MobileNavMenu,MobileNavToggle,NavbarLogo,NavbarButton } from "@/components/resizable-navbar";
import { BouncyCardsFeatures } from "@/components/bounce-card-feature";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

 const DemoOne = () => {
  return <BouncyCardsFeatures />;
};


  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center space-x-2">
            <NavbarButton variant="secondary">Sign In</NavbarButton>
            <NavbarButton>Sign Up</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="w-full rounded-lg p-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-2">
              <NavbarButton variant="secondary" className="w-full">
                Sign In
              </NavbarButton>
              <NavbarButton className="w-full">Sign Up</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <section id="home" className="relative z-20">
        <Hero />
      </section>

      
    </div>
  );
}
