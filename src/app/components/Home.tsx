import { Images } from "./Images"
import { Button } from "./ui/button"

export const Home = () => {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 mt-32 mb-4">
      <section className="bg-[#57CC99] h-full p-4 w-full flex flex-col gap-4 justify-around items-center md:gap-8 lg:flex-row lg:h-[500px]">
        <div className="text-[50px] leading-normal font-bold text-left text-white md:text-7xl">TE AJUDANDO <br />
          <span className="text-[#DB2763]">A AJUDAR</span> <br />
          <span className="text-[#DB2763]">O PRÓXIMO.</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 lg:w-[600px]">
          <div className="text-3xl text-white font-bold px-3 text-center">Doando dinheiro, alimento ou roupas, seu gesto já faz
            uma grande diferença. Ajude agora sua causa de preferência com o projeto Conexão Solidária.
          </div>
          <Button className="w-28 h-16 rounded-full bg-[#DB2763] text-2xl font-bold">DOAR</Button>
        </div>
      </section>
      <Images />
    </div>
  )
}