import { Bungee_Shade } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bungee = Bungee_Shade({
    subsets: ["latin"],
    weight: ["400"]
});

export const Header = () => {

    return (
        <header className="w-full h-24 flex justify-between items-center gap-8 fixed bg-[#F6EFEE] md:px-24 md:h-32">
            <div>
                <Image src="/assets/logo-header.png" width={200} height={200} alt="Logo" />
            </div>
            <nav className="flex-1">
                <div className=" flex justify-around items-center text-xl">
                    <Link href="/doar">Doar</Link>
                    <Link href="/doar">Quem Somos</Link>
                    <Link href="/doar">Contato</Link>
                </div>
            </nav>
        </header>
    )
}

//className="w-20 h-20 rounded-full text-lg bg-red-600 flex justify-center items-center md:w-28 md:h-28 lg:my-1"