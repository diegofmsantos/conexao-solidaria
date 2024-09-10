import Image from "next/image";

export const QuemSomos = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col gap-14 min-[375px]:gap-0 justify-between items-center px-4 py-10 bg-[#57CC99] xl:flex-row xl:px-20 md:px-14">
            <div className="max-w-[650px] min-h-[500px] flex justify-center items-center leading-snug text-xl text-white font-bold text-justify md:text-2xl xl:text-[27px] 2xl:text-4xl xl:mt-20 2xl:max-w-[750px]">
                Com o firme compromisso de conectar voluntários, organizações e beneficiários, a equipe do curso de
                Programador de Sistemas do Senac-PE criou este projeto para oferecer maior visibilidade às ações solidárias.
                Focamos na geolocalização para conectar os interessados com oportunidades próximas, assim facilitando na contribuição
                e reduzindo barreiras logísticas e de conhecimento regional. Nosso objetivo é promover a solidariedade de forma eficiente e
                impactante, aproximando aqueles que podem ajudar com aqueles que mais precisam.
            </div>
            <div className="w-72 h-72 flex justify-center items-center min-[375px]:w-[350px] min-[375px]:h-[350px] min-[425px]:w-[380px] min-[425px]:h-[380px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] xl:w-[500px] xl:h-[500px] 2xl:w-[800px] 2xl:h-[600px]">
                <Image 
                    src="/assets/grupo.jpeg" 
                    width={800} 
                    height={800} 
                    alt="Foto do grupo"
                />
            </div>
        </div>
    );
};
