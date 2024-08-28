"use client"

import { useRef } from "react";
import { Contato } from "./components/Contato";
import { Doar } from "./components/Doar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { QuemSomos } from "./components/QuemSomos";
import { Header } from "./components/Header"; // Importe o Header

const Page = () => {
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const doarRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full flex flex-col justify-between items-center bg-[#F6EFEE]">
      <Header 
        scrollToSection={scrollToSection} 
        refs={{ quemSomosRef, doarRef, contatoRef }}
      />
      <Home />
      <div ref={quemSomosRef}>
        <QuemSomos />
      </div>
      <div ref={doarRef}>
        <Doar />
      </div>
      <div ref={contatoRef}>
        <Contato />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
