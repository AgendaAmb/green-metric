"use client";
import Navbar from "./Navbar";
import AdminModal from "./AdminModal";
import { useEffect, useState } from 'react';
import { MdLogout } from "react-icons/md";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useDisclosure, Text, Image, } from '@chakra-ui/react'
import axios from "axios";
function Header({reloadDB}) {
    const [logout, setLogout] = useState(false);
    const [dependencies, setDependencies] = useState([]);
    const [showAdmin, setAdmin] = useState(false);
    const [showAdminIcon, setShowAdmin] = useState(false);
    const { onOpen, onClose, isOpen } = useDisclosure();
    

    const openAdminModal = () => {
        axios.get("/GreenMetric/api/dependencies").then((res) => {
            setDependencies(res.data);
            setAdmin(true);
        }).then(() => {
            onOpen();
        })
    }

    const router = useRouter();
    const close = () => {
        setTimeout(() => {
            setLogout(false);
            deleteCookie('user');
            router.refresh();
        }, 100)
    }

    useEffect(() => {
        const user = getCookie('user');
        if (user) {
            let tmpUser;

            try {
                tmpUser = JSON.parse(user);
                //console.log(tmpUser.role);
                if(tmpUser?.role === 1){
                    setShowAdmin(true);
                }

            }
            catch(e){};
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
                {logout &&
                    <div className="logout" role="button" onClick={close}>
                        <MdLogout className="icon icon-logout" />
                        <h5>Cerrar Sesion</h5>
                    </div>
                }
                {
                    showAdminIcon && 
                    <div className="admin" role="button" onClick={openAdminModal}>
                        {showAdmin && <AdminModal reloadDB={reloadDB} onClose={onClose} isOpen={isOpen} dependencies={dependencies}/>}
                        <MdOutlineAdminPanelSettings className="icon icon-logout" />
                        <h5>Admin</h5>
                    </div>
                }
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
