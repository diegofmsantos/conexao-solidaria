import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="w-full h-40 flex flex-col justify-between items-center py-8 px-20 bg-[#F6EFEE] border-t border-t-[#CCC] md:flex-row md:h-16">
            <div className="flex gap-20 text-sm md:text-md">
                <Link href="#" className="hover:underline">Privacidade</Link>
                <Link href="#" className="hover:underline">Termos e condições</Link>
            </div>
            <div className="flex gap-4 items-center">
                <Image src="/assets/logo-footer.png" width={30} height={30} alt="Logo-footer" />
                <div className="text-sm">Conexão Solidária</div>
            </div>
        </footer>
    )
}