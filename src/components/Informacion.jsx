"use client";
import {
    Select,
    VStack,
    Stack,
    StackDivider,
    Text,
    Input,
} from "@chakra-ui/react";
import CheckboxGroup from "./CheckboxCustomGroup";
import ImageSection from "./ImageSection";

export default function DependenciaForm() {
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
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"15px"}
            className="overflow-y"
            padding="30px"
        >
            <h1>Información</h1>
            <Stack spacing="10px" w="30%">
                <h3>Datos de la dependencia</h3>
                <Stack>
                    <Input placeholder="Dependencia universitaria" h="35px" />
                    <Input placeholder="Dirección de la dependencia" h="35px" />
                    <Input placeholder="Nombre del responsable" h="35px" />
                </Stack>
            </Stack>
            <Stack spacing="10px" w="100%">
                <h3>Secciones</h3>
                <li>
                    Favor de indicar el nombre completo del responsable de cada
                    sección{" "}
                </li>
                <CheckboxGroup
                    elements={[
                        { name: "Infraestructura y escenarios" },
                        { name: "Energía y cambio climático" },
                        { name: "Residuos" },
                        { name: "Agua" },
                        { name: "Transporte" },
                        { name: "Educación" },
                    ]}
                    columns={2}
                />
            </Stack>

            <Stack w="100%">
                <h3>Investigaciones</h3>
                <li>
                    Indique si en su entidad se realiza investigación
                    relacionada con la sostenibilidad.
                </li>
                <CheckboxGroup
                    elements={[
                        {
                            name: "Infraestructura y escenarios",
                            area: true,
                        },
                        { name: "Energía y cambio climático", area: true },
                        { name: "Residuos", area: true },
                        { name: "Agua", area: true },
                        { name: "Transporte", area: true },
                        { name: "Educación", area: true },
                    ]}
                />
            </Stack>
            <Stack spacing="10px" w="100%">
                <li>Indique tipo de dependencia universitaria</li>
                <Select placeholder="Selecciona una opción">
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
