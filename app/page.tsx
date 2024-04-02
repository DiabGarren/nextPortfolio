"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
    const [face, setFace] = useState("front");

    const xPlane = ["front", "right", "back", "left"];
    const yPlane = ["front", "top", "back", "bottom"];

    return (
        <main className="">
            <div className="container">
                <Button
                    className="col-[1/4]"
                    onClick={() => {
                        if (yPlane.indexOf(face) != yPlane.length - 1)
                            setFace(yPlane[yPlane.indexOf(face) + 1]);
                        else setFace(yPlane[0]);
                    }}
                >
                    ^
                </Button>

                <Button
                    onClick={() => {
                        if (xPlane.indexOf(face) != 0)
                            setFace(xPlane[xPlane.indexOf(face) - 1]);
                        else setFace(xPlane[xPlane.length - 1]);
                    }}
                >
                    {"<"}
                </Button>

                <div className="scene">
                    <div className={`cube show-${face}`}>
                        <div id="front" className="cube-face "></div>
                        <div id="right" className="cube-face "></div>
                        <div id="back" className="cube-face "></div>
                        <div id="left" className="cube-face "></div>
                        <div id="top" className="cube-face bg-white"></div>
                        <div id="bottom" className="cube-face bg-white"></div>
                    </div>
                </div>

                <Button
                    onClick={() => {
                        if (xPlane.indexOf(face) != xPlane.length - 1)
                            setFace(xPlane[xPlane.indexOf(face) + 1]);
                        else setFace(xPlane[0]);
                    }}
                >
                    {">"}
                </Button>
                <Button
                    className="col-[1/4]"
                    onClick={() => {
                        if (yPlane.indexOf(face) != 0)
                            setFace(yPlane[yPlane.indexOf(face) - 1]);
                        else setFace(yPlane[yPlane.length - 1]);
                    }}
                >
                    V
                </Button>
            </div>
        </main>
    );
}
