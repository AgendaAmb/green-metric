"use client";
import { useEffect, useState } from "react";

import FormArrows from "@/components/FormArrows";

import "@/sass";

export default function Home() {
    const [number, setNumber] = useState(1);
    useEffect(() => {}, []);
    return (
        <>
            <h1>Root</h1>
            <FormArrows number={number} setNumber={setNumber} />
        </>
    );
}
