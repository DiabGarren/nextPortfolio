import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Transcripts() {
    return (
        <main>
            <Header active="Transcripts" />
            <img
                className="mx-auto max-w-[50%]"
                src="/trans1.png"
                alt="Transcripts"
            />
            <img
                className="mx-auto max-w-[50%] mt-[15px]"
                src="/trans2.png"
                alt="Transcripts explanation"
            />
            <Footer />
        </main>
    );
}
