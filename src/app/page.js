"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import  "../sass/main.scss";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/informacion");
    }, []);
    return (
        <>
            <h1>Cargando...</h1>
        </>
    );
}
