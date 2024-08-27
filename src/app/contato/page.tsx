import { Footer } from "../components/Footer";
import { MainForm } from "../components/Form";

export const Page = () => {

    return (
        <div className="h-screen flex flex-col justify-between items-center bg-[#57CC99]">
           <MainForm />
          <Footer />
        </div>
    )
}

export default Page;