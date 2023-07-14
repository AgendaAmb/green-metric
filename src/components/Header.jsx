"use client";
import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import { MdLogout } from "react-icons/md";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
function Header() {
    const [logout, setLogout] = useState(false);
    const router = useRouter();
    const close = () => {
        deleteCookie('user');
        setTimeout(()=>{
            router.push('/home');
        }, 100);
    }

    useEffect(()=> {
        const user =getCookie('user');
        if(user){
            setLogout(true);
        }
    })

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Image src="/GreenMetric/agenda-white.svg" alt="logo" />
                    <Image src="/GreenMetric/green-metric.svg" alt="logo" />
                </div>
                <div className="titles no-overflow">
                    <Text className="font-header">Universidad Autónoma de San Luis Potosí</Text>
                    <Text className="font-header">Agenda Ambiental</Text>
                    <Text className="font-header">Green Metric</Text>
                </div>
                {logout && (<div className="logout" role="button" onClick={close}>
                    <MdLogout className="icon icon-logout" />
                    <h5>Cerrar Sesion</h5>
                </div>)}
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
