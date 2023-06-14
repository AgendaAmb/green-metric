"use client";
import { useEffect, useState } from "react";

import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

import DependenciaForm from "@/components/DependenciaForm";

function Main() {
    const [back, setBackHistory] = useState([]);
    const [next, setNextHistory] = useState([]);
    useEffect(() => {}, []);
    return (
        <>
            <DependenciaForm />
            <div className="navigation-arrow-left">
                <ArrowLeftIcon />
            </div>
            <div className="navigation-arrow-right">
                <ArrowRightIcon />
            </div>
        </>
    );
}

export default Main;
