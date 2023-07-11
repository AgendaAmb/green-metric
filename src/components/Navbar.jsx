"use client";
import Link from "next/link";
import { Box, Image } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/informacion/">
                <Box className="one-col" w="100%" bgColor={"#fbba00"}>
                    <h3 >Información</h3>
                </Box>
            </Link>
            <Link href="/infraestructura/">
                <Box w="100%" bgColor={"#008037"}>
                    <Image src="/GreenMetric/navbar/edificio.png"/>
                    <h3>Entorno e Infraestructura</h3>
                </Box>
            </Link>
            <Link href="/energia/">
                <Box w="100%" bgColor={"#cfaf2e"}>
                    <Image src="/GreenMetric/navbar/climatico.png"/>
                    <h3>Energía y Cambio Climático</h3>
                </Box>

            </Link>
            <Link href="/residuos/">

                <Box w="100%" bgColor={"#e09d9a"}>
                    <Image src="/GreenMetric/navbar/basura.png"/>
                    <h3>Gestión de Residuos</h3>
                </Box>
            </Link>
            <Link href="/agua/">
                <Box w="100%" bgColor={"#5271ff"}>
                    <Image src="/GreenMetric/navbar/agua.png"/>
                    <h3>Uso de Agua</h3>
                </Box>
            </Link>
            <Link href="/transporte/">
                <Box w="100%" bgColor={"#ff1616"}>
                    <Image src="/GreenMetric/navbar/transporte.png"/>
                    <h3>Transporte</h3>
                </Box>
            </Link>
            <Link href="/educacion/">
                <Box w="100%" bgColor={"#ff914d"}>
                    <Image src="/GreenMetric/navbar/investigacion.png"/>
                    <h3>Educación e Investigación</h3>
                </Box>
            </Link>
            <Link href="/reporte/">
                <Box className="one-col" w="100%" bgColor={"#66cfff"}>
                    <h3 >Reporte General</h3>
                </Box>
            </Link>
        </div>
    );
}
