"use client"

import { useRef } from "react"
import { Cadastro } from "./components/Cadastro"
import { Doar } from "./components/Doar"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { QuemSomos } from "./components/QuemSomos"
import { Header } from "./components/Header"

const Page = () => {
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const doarRef = useRef<HTMLDivElement>(null);
  const cadastroRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full flex flex-col justify-between items-center bg-[#F6EFEE]">
      <Header 
        scrollToSection={scrollToSection} 
        refs={{ doarRef, quemSomosRef, cadastroRef }}
      />
      <Home />
      <div ref={doarRef}>
        <Doar />
      </div>
      <div ref={quemSomosRef}>
        <QuemSomos />
      </div>
      <div ref={cadastroRef}>
        <Cadastro />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
