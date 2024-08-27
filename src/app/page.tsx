import { Footer } from "./components/Footer";
import { Images } from "./components/Images";
import { Button } from "./components/ui/button";

const Page = () => {

  return (
    <div className="h-full flex flex-col justify-between items-center bg-[#F6EFEE]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-20 pb-8 mt-32">
        <section className="bg-[#57CC99] h-96 w-full flex gap-4 justify-around items-center">
          <div className="text-[68px] leading-normal font-bold text-left text-white">TE AJUDANDO <br />
            <span className="text-[#DB2763]">A AJUDAR</span> <br />
            <span className="text-[#DB2763]">O PRÓXIMO.</span></div>
          <div className="flex flex-col justify-center items-center gap-6 lg:w-[500px]">
            <div className=" text-2xl text-white font-bold px-3 text-center">Doando dinheiro, alimento ou roupas, seu gesto já faz
              uma grande diferença. Ajude agora sua causa de preferência com o projeto Conexão Solidária.
            </div>
            <Button className="w-28 h-16 rounded-full bg-[#DB2763] text-2xl font-bold">DOAR</Button>
          </div>
        </section>
        <Images />
      </div>
      <Footer />
    </div>
  )
}

export default Page;