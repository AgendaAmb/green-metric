"use client";
import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Image src="/agenda-white.svg" alt="logo" />
                    <Image src="/green-metric.svg" alt="logo" />
                </div>
                <div className="titles no-overflow">
                    <Text className="font-header">Universidad Autónoma de San Luis Potosí</Text>
                    <Text className="font-header">Agenda Ambiental</Text>
                    <Text className="font-header">Green Metric</Text>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
