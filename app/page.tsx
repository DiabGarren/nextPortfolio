/* eslint-disable react/jsx-key */
"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
    const letters = [
        {
            letter: "m",
            path: (
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H12.5L86 131L160 0H172V214H0V0ZM81 145L11 21V203H161V23L91 145H81Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "y",
            path: (
                <path
                    d="M11 0H0V5L81 127V214H91V127L172 4V0H161L86 114L11 0Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "p",
            path: (
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H92C92 0 165.5 0 165.5 72C165.5 150 92 150 92 150H12V214H0V0ZM92 138H12V12H92C92 12 152.5 12 152.5 72C152.5 138 92 138 92 138Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "r",
            path: (
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V214H163L109 138C109 138 161 126 161 69C161 0 86 0 86 0H0ZM19 11L102 128C102 128 149.906 119 149 69C147.949 11 86 11 86 11H19ZM90 130H11V19L90 130ZM142 203L98 141H11V203H142Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "o",
            path: (
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M97 214H86H75C75 214 47.9703 214 23.2583 188.5C1.33514e-05 164.5 0 137 0 137L0.000518799 107L0 77C0 77 1.52588e-05 49.5 23.2583 25.5C47.9703 0 75 0 75 0H86H97C97 0 124.03 0 148.742 25.5C172 49.5 172 77 172 77L171.999 107L172 137C172 137 172 164.5 148.742 188.5C124.03 214 97 214 97 214ZM86 204H92C92 204 120 203.076 140 181.5C160 159.924 161 135 161 135V107V79C161 79 160 54.0763 140 32.5C120 10.9237 92 10 92 10H86H80C80 10 52 10.9237 32 32.5C12 54.0763 11 79 11 79V107V135C11 135 12 159.924 32 181.5C52 203.076 80 204 80 204H86Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "j",
            path: (
                <path
                    d="M1.00006 140H12.0001C12.0001 158.5 38 204.33 85.0001 203C85.3347 202.991 85.668 202.979 86 202.966C138.252 200.92 158 155.355 158 132.5V107L158 10H86H64V0H86H170L170 107V126C170 158.828 149.219 213.425 86 214C85.6679 214.003 85.3345 214 85 214C23.9999 214 1.00006 162.5 1.00006 140Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "e",
            path: (
                <path
                    d="M150 0H86H0V107V214H86H150V203H86H11V109H86H131V107V98H86H11V11H86H150V0Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "c",
            path: (
                <path
                    d="M86 204H92C92 204 120 203.076 140 181.5C153.463 166.976 158.317 150.934 160.051 142H171.595C170.438 151.017 165.973 170.719 148.742 188.5C124.03 214 97 214 97 214H86H75C75 214 47.9703 214 23.2583 188.5C1.33514e-05 164.5 0 137 0 137L0.000518799 107L0 77C0 77 1.52588e-05 49.5 23.2583 25.5C47.9703 0 75 0 75 0H86H97C97 0 124.03 0 148.742 25.5C165.973 43.2811 170.438 62.9834 171.595 72H160.051C158.317 63.0658 153.463 47.0245 140 32.5C120 10.9237 92 10 92 10H86H80C80 10 52 10.9237 32 32.5C12 54.0763 11 79 11 79V107V135C11 135 12 159.924 32 181.5C52 203.076 80 204 80 204H86Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "t",
            path: (
                <path
                    d="M81 214V107V11H0V0H86H172V11H90.9999L91 107V214H86H81Z"
                    fill="black"
                />
            ),
        },
        {
            letter: "s",
            path: (
                <path
                    d="M155 68.0001H144C144 68.0001 144.226 63.4203 144 60.5001C143.071 48.5 137.474 38.4104 127.5 28.5C117.155 18.2209 108.949 14.7259 94 12.0001C89.1071 11.4564 84.2142 11.2083 79 11.2557C74.6231 11.2956 70.0198 11.5437 65 12.0001C53.3931 14.2398 46.1878 15.6785 37 23C28.6918 29.6206 23.9658 34.963 21 45.0001C20 53.5001 20 60.5001 21 67.0001C24.6233 77.7301 36 85.4356 46.5 89.5001C62 95.5001 79 99.0001 79 99.0001C79 99.0001 96.1015 101.993 112.413 107C121.048 109.651 129.462 112.866 135 116.5C146.538 125.006 151.291 130.154 155 144C156 151.5 156.725 161 155 168.5C151.974 181.652 147.029 188.97 137 198C126.612 207.353 118.07 209.644 104.5 213C97 214 88.5 214 79 214C72.675 213.883 65.956 214.192 59 213C40.5214 208.325 28.6615 203.677 16.5 189C6.27415 176.659 2.10078 166.989 0.999991 151C0.758587 147.494 0.999991 142 0.999991 142H12C12 142 11.8491 145.966 12 148.5C12.9037 163.68 17.6525 172.857 28 184C39.0528 195.903 49.1296 199.54 65 203C69.8454 203.808 74.4462 204.126 79 204.153C85.724 204.192 92.3454 203.596 99.5 203C112.234 200.26 120.669 198.589 130 189.5C137.269 182.419 140.476 176.829 143 167C144 160 144 150 142 143C138.166 132.936 127.605 124.812 118 121.5C103.5 116.5 79 111 79 111C79 111 71.2651 109.689 61.0986 107C51.4108 104.437 39.5149 100.624 30 95.5001C19 88.5001 12.4218 80.668 9 68.0001C8 60.5001 8 54.0001 9 44.0001C12.1385 27.7573 19.121 21.9031 31 13C41.0971 5.43246 48.9272 3.3285 61 1.00007C67.7695 0.0329779 73.5 -6.1468e-06 79 0C84.8886 0.0345802 90.5442 0.225334 97 1.00006C112.712 4.36583 123.127 8.41125 135 20C147.001 31.7133 153.571 42 155 58.0001C155.357 62 155 68.0001 155 68.0001Z"
                    fill="black"
                />
            ),
        },
    ];

    const states = ["close", "open", "go"];
    const [letterState, setLetterState] = useState(
        letters.map((letter) => {
            return states[0];
        })
    );

    const pages = [
        {
            link: "https://diab-garren.vercel.app/3DPrinting",
            thumbnail: "/thumbnails/3d-printing.png",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
        {
            link: "",
            thumbnail: "",
        },
    ];

    return (
        <main>
            <header>
                <h1>Welcome</h1>
            </header>
            <div
                className="container grid grid-cols-box gap-[30px_10px] py-[50px] mx-auto max-w-[85%]"
                onClick={(event) => {
                    if (
                        !event.target.classList.contains("letter") &&
                        event.target.nodeName != "svg" &&
                        event.target.nodeName != "path"
                    )
                        setLetterState(
                            letters.map((letter) => {
                                return "close";
                            })
                        );
                }}
            >
                <div
                    className="col-[1/4] text-right text-[13px] sm:text-[18px] md:text-[35px] lr:text-[50px]"
                    id="click"
                >
                    clicK HeRe<br></br>---→
                </div>
                {letters.map((letter, index) => {
                    return (
                        <div
                            className={`${
                                letter.letter === "p" ? "col-[1]" : ""
                            } letter ${
                                "letter-" + letterState[index]
                            } grid grid-cols-2  ${
                                letterState[index] === "open"
                                    ? 'bg-[url("' +
                                      pages[index].thumbnail +
                                      '")]'
                                    : ""
                            }
                            `}
                            style={{
                                backgroundImage: `${
                                    letterState[index] === "open"
                                        ? 'url("' +
                                          pages[index].thumbnail +
                                          '")'
                                        : ""
                                }`,
                            }}
                            id={`letter-${letter.letter}`}
                            onClick={() => {
                                if (letterState[index] === "open") {
                                    if (pages[index].link !== "") {
                                        window.open(pages[index].link);
                                    }
                                } else
                                    setLetterState(
                                        letterState.map(
                                            (letter, letterIndex) => {
                                                if (letterIndex === index) {
                                                    if (
                                                        letterState[index] ===
                                                        "close"
                                                    )
                                                        return "open";
                                                    else return "close";
                                                } else return "close";
                                            }
                                        )
                                    );
                            }}
                        >
                            <svg
                                className="col-[1/3] door"
                                width="172"
                                height="214"
                                viewBox="0 0 172 214"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {letter.path}
                            </svg>
                            <svg
                                className="portal"
                                width="86"
                                height="107"
                                viewBox="0 0 86 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M86 10V0H75C75 0 47.9703 0 23.2583 25.5C1.52588e-05 49.5 0 77 0 77L0.00051529 107H11V79C11 79 12 54.0763 32 32.5C52 10.9237 80 10 80 10H86Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                            <svg
                                className="portal"
                                width="86"
                                height="107"
                                viewBox="0 0 86 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M-1.52588e-05 10V0H11C11 0 38.0297 0 62.7417 25.5C86 49.5 86 77 86 77L85.9995 107H75V79C75 79 74 54.0763 54 32.5C34 10.9237 5.99998 10 5.99998 10H-1.52588e-05Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                            <svg
                                className="portal"
                                width="86"
                                height="107"
                                viewBox="0 0 86 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M86 97V107H75C75 107 47.9703 107 23.2583 81.5C1.52588e-05 57.5 0 30 0 30L0.00051529 7.62939e-06H11V28C11 28 12 52.9237 32 74.5C52 96.0763 80 97 80 97H86Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                            <svg
                                className="portal"
                                width="86"
                                height="107"
                                viewBox="0 0 86 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M-1.52588e-05 97V107H11C11 107 38.0297 107 62.7417 81.5C86 57.5 86 30 86 30L85.9995 7.62939e-06H75V28C75 28 74 52.9237 54 74.5C34 96.0763 5.99998 97 5.99998 97H-1.52588e-05Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
