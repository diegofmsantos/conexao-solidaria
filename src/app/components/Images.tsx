import Image from "next/image";

export const Images = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-8 w-full my-4 xl:flex-row xl:justify-around xl:items-baseline xl:gap-0">
            <div className="w-80 flex flex-col justify-center items-center text-[#2B9C6B] md:w-[450px]">
                <Image 
                    src="/assets/foto1.jpg" 
                    width={450} 
                    height={384} 
                    alt="Foto 1" 
                    className="w-full h-auto"
                />
                <div className="text-center text-lg my-2">Escolha uma instituição de caridade e o Conexão Solidária facilitará o processo de sua doação.</div>
            </div>
            <div className="w-80 flex flex-col justify-center items-center text-[#2B9C6B] md:w-[450px]">
                <Image 
                    src="/assets/foto2.jpg" 
                    width={450} 
                    height={384} 
                    alt="Foto 2" 
                    className="w-full h-auto"
                />
                <div className="text-center text-lg my-2">Doações não estão limitadas apenas a dinheiro. Veja aqui o que a instituição de sua escolha está precisando, seja isso roupas, alimentos, etc.</div>
            </div>
            <div className="w-80 flex flex-col justify-center items-center text-[#2B9C6B] md:w-[450px]">
                <Image 
                    src="/assets/foto3.jpg" 
                    width={450} 
                    height={384} 
                    alt="Foto 3" 
                    className="w-full h-auto"
                />
                <div className="text-center text-lg my-2">Pesquise por Instituições que estão perto de você e faça sua contribuição.</div>
            </div>
        </section>
    )
}
