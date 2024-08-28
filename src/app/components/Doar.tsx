"use client"

import Image from "next/image";
import { useState } from "react";

export const Doar = () => {
    const [selectedIndex, setSelectedIndex] = useState<null | number >(0);

    const handleSelected = (index: number) => {
        setSelectedIndex(index);
    };

    const divs = [
        { title: "DINHEIRO", subtitle: "DOE" },
        { title: "ALIMENTO", subtitle: "DOE" },
        { title: "ROUPAS", subtitle: "DOE" },
    ];

    return (
        <div className="w-screen min-h-screen flex flex-col justify-start gap-10 xl:gap-20">
            <div className="w-full h-96 relative">
                <Image
                    src="/assets/bg-doar.png"
                    layout="fill"
                    objectFit="cover"
                    alt="background"
                    className="h-full w-full"
                />
            </div>
            <section className="flex flex-col justify-center items-center gap-10 mb-10 text-white text-4xl text-center font-bold xl:flex-row xl:justify-around">
                {divs.map((div, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelected(index)}
                        className={`w-72 h-60 rounded-3xl text-[#DB2763] border border-gray-400 flex flex-col justify-center items-start p-8 cursor-pointer md:w-80 md:h-72 ${
                            selectedIndex === index ? 'bg-[#DB2763]' : 'bg-white'
                        } ${
                            selectedIndex === index ? 'text-white' : 'text-[#DB2763]'
                        }`}
                    >
                        <div className="text-2xl flex justify-center items-center p-2 md:text-3xl">{div.subtitle}</div>
                        <div className="text-4xl flex justify-center items-center p-2 md:text-5xl">{div.title}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};
