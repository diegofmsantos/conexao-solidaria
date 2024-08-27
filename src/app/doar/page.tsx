import Image from "next/image";
import { Footer } from "../components/Footer";

const Page = () => {
    return (
        <div className="w-screen h-screen pt-32">
            <div className="w-full h-auto">
                <Image
                    src="/assets/bg-doar.png"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    alt="background"
                    className="object-cover"
                />
            </div>
            <section className="flex justify-center items-center gap-20 max-w-[1100px] m-auto my-10 text-white text-4xl text-center font-bold">
                <div className="bg-[#DB2763] w-60 h-40 rounded-full flex justify-center items-center">
                    <span className="text-2xl">DOE</span> <br /> DINHEIRO
                </div>
                <div className="bg-[#DB2763] w-60 h-40 rounded-full flex justify-center items-center">
                    <span className="text-2xl">DOE</span> <br /> ALIMENTO
                </div>
                <div className="bg-[#DB2763] w-60 h-40 rounded-full flex justify-center items-center">
                    <span className="text-2xl">DOE</span> <br /> ROUPAS
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page;
