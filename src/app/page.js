"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/sass";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/forms/dependencia/1");
    }, []);
    return (
        <>
            <h1>Root</h1>
        </>
    );
}
