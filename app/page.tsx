import { Footer } from "./components/Footer";
import { MainForm } from "./components/Form";
import { Header } from "./components/Header";

const Page = () => {

  return (
    <div className="w-screen h-full bg-[url('/assets/bg-culinaria-1.jpg')] bg-cover bg-center flex flex-col justify-between items-center overflow-x-hidden">
      <Header />
      <div className="w-full h-full flex flex-col justify-center items-center gap-20 p-2 max-w-[1400px] pb-8 mt-40  md:px-6">
        <section className="bg-white/70 max-w-[1100px] flex flex-col gap-4 justify-center items-center">
          <div className="text-3xl font-bold md:text-4xl lg:text-6xl">Quem somos?</div>
          <div className=" text-lg px-3 text-center md:text-[18px] lg:text-2xl">Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Facilis placeat neque corporis voluptas est! Inventore, asperiores itaque!
            Deleniti enim consequuntur dolorum iusto id vero dicta cum vitae quos? Blanditiis, accusamus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eaque, laudantium facilis minima
            quis pariatur sequi animi, totam voluptate exercitationem labore ut voluptas reiciendis deserunt
            possimus iste et. Saepe, accusamus.
          </div>
        </section>
        <section className="bg-white/70 p-3 flex flex-col min-w-[300px] min-[400px]:min-w-[390px] justify-around items-center gap-32 max-w-[1100px] xl:flex-row">
          <div className="w-72 h-72 rounded-full bg-gray-700"></div>
          <div className="w-72 h-72 rounded-full bg-gray-700"></div>
          <div className="w-72 h-72 rounded-full bg-gray-700"></div>
        </section>
        <MainForm />
      </div>
      <Footer />
    </div>
  )
}

export default Page;