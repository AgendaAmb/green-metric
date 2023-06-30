
import  "../sass/main.scss";

import { Providers } from "./providers";

import Header from "@components/Header";

export const metadata = {
    title: "Green Metric",
    description: "Green Metric App",
    
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <div
                    className={`main  main-container body`}
                    suppressHydrationWarning={true}
                >
                    <Header />
                    <div className="main ">
                        <div className="main-info-container">
                            <Providers>{children}</Providers>
                        </div>
                    </div>
                </div>

            </body>
        </html>
    );
}
