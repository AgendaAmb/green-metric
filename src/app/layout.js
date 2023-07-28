
import "@sass";

import { Providers } from "./providers";

import Header from "../components/Header";

export const metadata = {
    title: "Green Metric",
    description: "Green Metric App",

};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body>
                <Providers>
                    <div
                        className={`main  main-container body`}
                        suppressHydrationWarning={false}
                    >
                        <Header />
                        <div className="main ">
                            <div className="main-info-container">
                                {children}
                            </div>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
