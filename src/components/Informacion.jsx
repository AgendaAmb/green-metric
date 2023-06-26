"use client";
import {
    Select,
    VStack,
    Stack,
    StackDivider,
    Text,
    Input,
} from "@chakra-ui/react";

import DropImage from "./DropImage";

import ModuleInput from "./ModuleInput";
import { useEffect, useState } from "react";

export default function Informacion() {
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

    const [dependencia, setDependencia] = useState(1);


    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"15px"}
            className="overflow-y"
            padding="30px"
        >
            <h1 className="blue">Información</h1>
            
            <Stack spacing="30px" w="30%" padding="30px">
                <ModuleInput title={"Datos de la dependencia"} elements={[{ holder: "Nombre de la dependencia", type: 1 }, { holder: "Nombre del responsable", type: 1 }]} />
            </Stack>
            <Stack spacing="30px" w="100%" className="column-3">
                <h3 className="expand-3">Departamentos y dependencias a reportar</h3>
                <Stack>
                    <ModuleInput elements={[{ holder: `Nombre de la dependencia ${dependencia}`, type: 1 }, { holder: `Direccion de la dependencia ${dependencia}`, type: 1 }]} />
                </Stack>
                <Stack >
                    <ModuleInput add={true} addTitle={"\0"} />
                </Stack>
                <Stack>
                    {/* Agregar <ModuleInput title={"\0"} elements={[{ holder: "Nombre de la dependencia", type: 1 }, { holder: "Direccion de la dependencia", type: 1 }]} /> */}
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <ModuleInput title="Favor de indicar el nombre completo del responsable de cada sección" checkbox={{data: ["1. Infraestructura y escenarios.",
                    "2. Energía y cambio climático",
                    "3. Residuos",
                    "4. Agua",
                    "5. Transporte",
                    "6. Educación",
                ], hasInput: true}} />
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <ModuleInput title="Favor de indicar el nombre completo del responsable de cada sección" checkbox={{data: options, hasInput: true}} area={true} />
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="expand-3">Indique el tipo de dependencia universitaria</h3>
                <ModuleInput select={options} />
                <ModuleInput elements={[{ text: "¿Cuántas personas asisten a su entidad en promedio diariamente?", type: 2 }]} />
            </Stack>

            {/* <Stack spacing="10px" w="100%">
                <li>Indique tipo de dependencia universitaria</li>
                <CustomSelect data={options} />
                <Text mb="8px">
                    ¿Cuántas personas asisten a su entidad en promedio
                    diariamente?
                </Text>
                <Input
                    type="number"
                    placeholder="Ingrese una cantidad numérica"
                    size="sm"
                />
            </Stack> */}

            <Stack spacing="10px" w="100%">
                <h3>Fotografías</h3>
                <li>Anexar fotografías de su entidad de trabajo.</li>
                <VStack w="100%" className="grid-center column-3">
                    <DropImage title={"Instalaciones interiores"} maxPhotos={3} />
                    <DropImage title={"Fachadas"} maxPhotos={3} />
                    <DropImage title={"Planos"} maxPhotos={3} />
                </VStack>
            </Stack>
            {/*  <Stack spacing="10px" w="30%">
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
                <CustomSelect data={options} />
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
                    <DropImage title={"Instalaciones interiores"} />
                    <DropImage title={"Fachadas"} />
                    <DropImage title={"Planos"} />
                </VStack>
            </Stack> */}
        </VStack>
    );
}
