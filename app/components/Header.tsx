import { Bungee_Shade } from "next/font/google";

const bungee = Bungee_Shade({
  subsets: ["latin"],
  weight: ["400"]
});

export const Header = () => {

    return (
        <header className="w-full h-24 px-4 flex justify-between items-center bg-white/60 md:px-24 md:h-32">
            <div className="w-20 h-20 rounded-full text-lg bg-red-600 flex justify-center items-center md:w-28 md:h-28 lg:my-1">LOGO</div>
            <div className={`text-[26px] text-center font-bold w-48 text-red-600 ${bungee.className} md:text-[40px] min-[400px]:text-[32px] min-[400px]:m-auto xl:text-[60px] lg:w-[600px] xl:w-[800px]`}>Conexão Solidária</div>
        </header>
    )
}