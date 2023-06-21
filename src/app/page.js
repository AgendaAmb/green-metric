"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  "@sass";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/información");
    }, []);
    return (
        <>
            <h1>Root</h1>
        </>
    );
}
