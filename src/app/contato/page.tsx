import { Footer } from "../components/Footer";
import { MainForm } from "../components/Form";

const Page = () => {

    return (
        <div className="h-full flex flex-col justify-center items-center bg-[#57CC99]">
           <MainForm />
          <Footer />
        </div>
    )
}

export default Page;