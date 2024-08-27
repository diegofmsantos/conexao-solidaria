import Image from "next/image";

export const Images = () => {

    return (
        <section className="flex justify-around items-baseline w-full">
            <div className="w-96 flex flex-col justify-center items-center text-[#2B9C6B]">
                <Image src="/assets/foto1.jpg" width={384} height={384} alt="Foto 1" />
                <div className="text-center text-lg">Escolha uma instituição de caridade e o Conexão Solidária facilitará o processo de sua doação.</div>
            </div>
            <div className="w-96 flex flex-col justify-center items-center text-[#2B9C6B]">
                <Image src="/assets/foto2.jpg" width={384} height={384} alt="Foto 2" />
                <div className="text-center text-lg">Doações não estão limitadas apenas a dinheiro. Veja aqui o que a instituição de sua escolha está precisando, seja isso roupas, alimentos, etc.</div>
            </div>
            <div className="w-96 flex flex-col justify-center items-center text-[#2B9C6B]">
                <Image src="/assets/foto3.jpg" width={384} height={384} alt="Foto 3" />
                <div className="text-center text-lg">Pesquise por Instituições que estão perto de você e faça sua contribuição.</div>
            </div>
        </section>
    )
}