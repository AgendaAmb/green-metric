"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "@sass";
import axios from "axios";
import Login from "@/components/Login";



export default function Home() {
    const router = useRouter();

    useEffect(() => {
        //router.push("/informacion");
    }, []);
    return (
            <Login />
    );
}
