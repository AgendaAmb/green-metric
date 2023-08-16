
"use client";
import "@sass";

import { Providers } from "./providers";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect, useState } from "react";
import { hasCookie, getCookie } from "cookies-next";
import axios from "axios";
import Login from "../components/Login";
import Header from "../components/Header";

const metadata = {
    title: "Green Metric",
    description: "Green Metric App",

};

export default function RootLayout({ children }) {
    const [data, setData] = useState({});
    const [images, setImages] = useState([]);
    const [load, setLoad] = useState(true);
    const [reload, setReload] = useState(false);
    const [showAdminIcon, setShowAdmin] = useState(false);

    const reloadDB = () => {
        const interval = setInterval(async () => {
            if (hasCookie("user")) {
                let user = getCookie("user");
                try {
                    user = JSON.parse(user);
                }
                catch (e) {
                    console.log("Error al parsear cookie");
                }
                
                clearInterval(interval);
                const response = axios.get('/GreenMetric/api/answers', {
                    params: { user } // Pasar los parámetros como parte del objeto `params`
                });
                const results = await response;
                const final = await results;
                setData(final);
                setLoad(false);
                axios.get('/GreenMetric/api/upload').then((res) => {
                    
                    setImages(res.data);

                    setTimeout(() => {
                        setReload(true);
                    }, 100);
                });

            }
        }, 1000);
    }
    useEffect(() => {
        reloadDB();
    }, [])
    return (
        <html lang="en">
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>

            <body>
                <DndProvider backend={HTML5Backend}>
                    <CacheProvider>
                        <ChakraProvider>

                            <div
                                className={`main  main-container body`}
                                suppressHydrationWarning={false}
                            >
                                <Header reloadDB={reloadDB} />
                                <div className="main ">
                                    <div className="main-info-container">
                                        {load ?
                                            <Providers data={data} images={images} >
                                                <Login />
                                            </Providers> :
                                            reload && <Providers data={data} images={images}>{children}</Providers>}
                                    </div>
                                </div>
                            </div>

                        </ChakraProvider>
                    </CacheProvider>
                </DndProvider>
            </body>
        </html>
    );
}
