import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CV() {
    return (
        <main>
            <Header active="CV" />
            <img
                className="mx-auto max-w-[50%]"
                src="/cv.png"
                alt="Garren Diab CV"
            />
            <Footer />
        </main>
    );
}
