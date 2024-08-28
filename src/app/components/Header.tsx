"use client"

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    quemSomosRef: React.RefObject<HTMLDivElement>;
    doarRef: React.RefObject<HTMLDivElement>;
    contatoRef: React.RefObject<HTMLDivElement>;
  };
}

export const Header = ({ scrollToSection, refs }: HeaderProps) => {
  return (
    <header className="w-full h-32 flex justify-between items-center gap-8 fixed border-b border-b-[#CCC] bg-[#F6EFEE] z-50 md:px-24">
      <div>
        <Link href="/">
          <Image src="/assets/logo-header.png" width={200} height={200} alt="Logo" />
        </Link>
      </div>
      <nav className="hidden md:flex">
        <div className="flex justify-around items-center text-xl">
          <button
            onClick={() => scrollToSection(refs.quemSomosRef)}
            className="hover:underline p-4 rounded-full"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection(refs.doarRef)}
            className="hover:underline p-4 rounded-full"
          >
            Doar
          </button>
          <button
            onClick={() => scrollToSection(refs.contatoRef)}
            className="hover:underline p-4 rounded-full"
          >
            Contato
          </button>
        </div>
      </nav>
    </header>
  );
};
