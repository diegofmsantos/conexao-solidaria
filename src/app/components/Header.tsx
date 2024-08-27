import Image from "next/image";
import Link from "next/link";


export const Header = () => {

    return (
        <header className="w-full h-24 flex justify-between items-center gap-8 fixed border-b border-b-[#CCC] bg-[#F6EFEE] md:px-24 md:h-32">
            <div>
                <Link href="/">
                    <Image src="/assets/logo-header.png" width={200} height={200} alt="Logo" />
                </Link>
            </div>
            <nav className="flex-1">
                <div className=" flex justify-around items-center text-xl">
                    <Link href="/doar" className="hover:underline p-4 rounded-full">Doar</Link>
                    <Link href="/sobre" className="hover:underline p-4 rounded-full">Quem Somos</Link>
                    <Link href="/contato" className="hover:underline p-4 rounded-full">Contato</Link>
                </div>
            </nav>
        </header>
    )
}
