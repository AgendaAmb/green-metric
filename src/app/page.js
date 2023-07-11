"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./sass/main.scss";
import axios from "axios";


export default function Home() {
    const router = useRouter();

    useEffect(() => {
        //router.push("/informacion");
        axios.post('/GreenMetricTest/api?first=Ros', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <>
            <h1>Cargando...</h1>
        </>
    );
}
