"use client";
import Main from "@/components/Main";
import Arrows from "@/components/FormArrows";
import { useState } from "react";

export default function DependenciaForm1() {
    const [number, setNumber] = useState(1);

    return (
        <>
            <Main />
            <Arrows right={"2"} />
        </>
    );
}