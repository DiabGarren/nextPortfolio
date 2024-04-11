/* eslint-disable react/jsx-key */
const pages = [
    { name: "Home", link: "/" },
    { name: "CV", link: "/cv" },
    { name: "Certificates", link: "/certificates" },
    { name: "Transcripts", link: "/transcripts" },
];

export default function Header({ active }: { active: String }) {
    return (
        <header>
            <div className="max-w-[1400px] mx-auto p-[10px] pb-[3px]">
                <h1 className="text-[27px] font-[700] mb-[10px]" id="heading">
                    garren-diab{">"}
                </h1>

                <nav>
                    <ul className="flex md:justify-between lr:justify-normal lr:gap-[15px]">
                        {pages.map((page) => {
                            return (
                                <li>
                                    <a
                                        href={page.link}
                                        className={`${
                                            active == page.name
                                                ? "bg-orange text-black border-b-orange hover:border-b-grey"
                                                : "border-b-grey hover:border-b-orange"
                                        } rounded-t-[10px] p-[2px_50px] text-[27px] text-center border-b-3 `}
                                    >
                                        {page.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
