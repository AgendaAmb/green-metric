
"use client";
import "@sass";

import { Providers } from "./providers";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { hasCookie, getCookie } from "cookies-next";
import axios from "axios";
import Login from "../components/Login";

export const metadata = {
    title: "Green Metric",
    description: "Green Metric App",

};

export default function RootLayout({ children }) {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    useEffect(() => {
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
            }
        }, 1000);
    }, [load])
    return (
        <html lang="en">
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body>

                <div
                    className={`main  main-container body`}
                    suppressHydrationWarning={false}
                >
                    <Header />
                    <div className="main ">
                        <div className="main-info-container">
                            {load ? <Login /> : <Providers data={data}>{children}</Providers>}
                        </div>
                    </div>
                </div>

            </body>
        </html>
    );
}
