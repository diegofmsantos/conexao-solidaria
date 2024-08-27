import Image from "next/image"

export const Footer = () => {

    return (
        <footer className="w-full h-24 flex justify-between items-center px-20 bg-[#F6EFEE] border-t border-t-[#CCC]">
            <div className="flex gap-20">
                <div>Privacidade</div>
                <div>Termos e Condições</div>
            </div>
            <div className="flex gap-4 items-center">
                <Image src="/assets/logo-footer.png" width={30} height={10} alt="Logo-footer" />
                <div className="text-sm">Conexão Solidária</div>
            </div>
        </footer>
    )
}