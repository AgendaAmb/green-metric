"use client";
import {
    Select,
    VStack,
    Stack,
    StackDivider,
    Text,
    Input,
} from "@chakra-ui/react";

import ImageSection from "./ImageSection";
export default function DependenciaImagesForm() {
    const options = [
        "Entidades Academicas",
        "Institutos y centros de investigación",
        "Rectoría",
        "Secretarías",
        "Divisiones",
        "Entidades de apoyo y extensión",
        "Entidades de apoyo académico",
        "Servicios al público",
    ];

    return (
        <VStack
            w="80%"
            divider={<StackDivider borderColor="gray.200" />}
            className="base-z-index"
            spacing={"15px"}
        >
            {/* <Stack spacing="10px" w="30%">
                <h2 className="self-start">Información sobre Dependencia</h2>
                <Input placeholder="Dependencia Universitaria" h="35px" />
                <Input placeholder="Dirección de la Dependencia" h="35px" />
                <Input placeholder="Nombre del Responsable" h="35px" />
            </Stack> */}
            <Stack spacing="10px" w="100%">
                <h3>Información</h3>
                <li>Indique tipo de dependencia universitaria</li>
                <Select placeholder="Select option">
                    {options?.map((option, index) => {
                        return (
                            <option value={`${index}`} key={index}>
                                {option}
                            </option>
                        );
                    })}
                </Select>
                <Text mb="8px">
                    ¿Cuántas personas asisten a su entidad en promedio
                    diariamente?
                </Text>
                <Input
                    type="number"
                    placeholder="Ingrese una cantidad numérica"
                    size="sm"
                />
            </Stack>

            <Stack spacing="10px" w="100%">
                <h3>Fotografías</h3>
                <li>Anexar fotografías de su entidad de trabajo.</li>
                <VStack w="100%" className="grid-center column-3">
                    <ImageSection title={"Instalaciones interiores"} />
                    <ImageSection title={"Fachadas"} />
                    <ImageSection title={"Planos"} />
                </VStack>
            </Stack>
        </VStack>
    );
}
