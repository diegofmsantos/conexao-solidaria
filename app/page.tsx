import { Footer } from "./components/Footer";
import { MainForm } from "./components/Form";
import { Header } from "./components/Header";

const Page = () => {

  return (
    <div className="w-screen h-full bg-[url('/assets/bg-culinaria-1.jpg')] bg-cover bg-center flex flex-col justify-between items-center md:h-screen">
      <Header />
      <div className="w-full h-full flex flex-col justify-around p-2 gap-8 max-w-[1400px] py-8 bg-white/40 md:px-6 xl:flex-row">
        <section className="bg-white/40 flex flex-col gap-4 justify-center items-center lg:w-[600px]">
          <div className="text-3xl font-bold md:text-4xl lg:text-6xl">Quem somos?</div>
          <div className=" text-lg px-3 text-center md:text-[18px] lg:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat neque corporis voluptas est! Inventore, asperiores itaque!
            Deleniti enim consequuntur dolorum iusto id vero dicta cum vitae quos? Blanditiis, accusamus.</div>
        </section>
        <MainForm />
      </div>
      <Footer />
    </div>
  )
}

export default Page;