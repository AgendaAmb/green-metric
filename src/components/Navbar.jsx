"use client";
import Link from "next/link";
import { Box } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/informacion/">
                <Box w="100%" bgColor={"#fbba00"}>
                    <h3 >Información</h3>
                </Box>
            </Link>
            <Link href="/infraestructura/">
                <Box w="100%" bgColor={"#008037"}>
                    <h3>Infraestructura y escenarios</h3>
                </Box>
            </Link>
            <Link href="/energia/">
                <Box w="100%" bgColor={"#cfaf2e"}>
                    <h3>Energía y cambio climático</h3>
                </Box>

            </Link>
            <Link href="/residuos/">

                <Box w="100%" bgColor={"#e09d9a"}>
                    <h3>Residuos</h3>
                </Box>
            </Link>
            <Link href="/agua/">
                <Box w="100%" bgColor={"#5271ff"}>
                    <h3>Agua</h3>
                </Box>
            </Link>
            <Link href="/transporte/">
                <Box w="100%" bgColor={"#ff1616"}>
                    <h3>Transporte</h3>
                </Box>
            </Link>
            <Link href="/educacion/">
                <Box w="100%" bgColor={"#ff914d"}>
                    <h3>Educación</h3>
                </Box>
            </Link>
        </div>
    );
}
