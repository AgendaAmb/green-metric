"use client";
import Main from "@components/Informacion";
import Arrows from "@components/FormArrows";
import { useState } from "react";

export default function DependenciaForm1() {
    const [number, setNumber] = useState(1);

    return (
        
            <div className="overflow-y">
                <Main />
            </div>
            
        
    );
}
