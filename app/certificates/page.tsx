import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Certificates() {
    return (
        <main>
            <Header active="Certificates" />
            <img
                className="mx-auto max-w-[50%]"
                src="/cert1.png"
                alt="Matric Certificate"
            />
            <img
                className="mx-auto max-w-[50%] mt-[15px]"
                src="/cert2.png"
                alt="Web and Computer Programming Certificate"
            />
            <img
                className="mx-auto max-w-[50%] mt-[15px]"
                src="/cert3.png"
                alt="Web Development Certificate"
            />
            <img
                className="mx-auto max-w-[50%] mt-[15px]"
                src="/cert4.png"
                alt="Seminary Certificate"
            />
            <img
                className="mx-auto max-w-[50%] mt-[15px]"
                src="/cert5.png"
                alt="PathwayConnect Certificate"
            />
            <Footer />
        </main>
    );
}
