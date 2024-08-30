"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    quemSomosRef: React.RefObject<HTMLDivElement>;
    doarRef: React.RefObject<HTMLDivElement>;
    contatoRef: React.RefObject<HTMLDivElement>;
  };
}

export const Header = ({ scrollToSection, refs }: HeaderProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (section: string, ref: React.RefObject<HTMLDivElement>) => {
    setActiveButton(section);
    scrollToSection(ref);
  };

  return (
    <header className="w-full h-32 flex items-center gap-8 fixed border-b border-b-[#CCC] bg-[#F6EFEE] z-50 md:px-24">
      <div className="w-52">
        <Link href="/">
          <Image src="/assets/logo-header.png" width={200} height={200} alt="Logo" />
        </Link>
      </div>
      <nav className="hidden flex-1 justify-center md:flex">
        <div className="flex justify-center items-center gap-20 text-xl">
          <button
            onClick={() => handleClick("quemSomos", refs.quemSomosRef)}
            className={`p-4 rounded-full ${activeButton === "quemSomos" ? "underline" : ""}`}
          >
            Quem Somos
          </button>
          <button
            onClick={() => handleClick("doar", refs.doarRef)}
            className={`p-4 rounded-full ${activeButton === "doar" ? "underline" : ""}`}
          >
            Doar
          </button>
          <button
            onClick={() => handleClick("contato", refs.contatoRef)}
            className={`p-4 rounded-full ${activeButton === "contato" ? "underline" : ""}`}
          >
            Contato
          </button>
        </div>
      </nav>
    </header>
  );
};
