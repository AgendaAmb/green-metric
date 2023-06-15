"use client";
import Main from "@/components/Main";
import Arrows from "@/components/FormArrows";
import { useState } from "react";

export default function Home() {
    const [number, setNumber] = useState(1);
    console.log();
    return (
        <>
            <Main />
            <Arrows number={number} setNumber={setNumber} />
        </>
    );
}
