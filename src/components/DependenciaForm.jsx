"use client";
import { Input, VStack, Stack, StackDivider } from "@chakra-ui/react";
import CheckboxGroup from "./CheckboxCustomGroup";

export default function DependenciaForm() {
    return (
        <VStack
            w="80%"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"15px"}
        >
            <Stack spacing="10px" w="30%">
                <h2 className="self-start">Información sobre Dependencia</h2>
                <Input placeholder="Dependencia Universitaria" h="35px" />
                <Input placeholder="Dirección de la Dependencia" h="35px" />
                <Input placeholder="Nombre del Responsable" h="35px" />
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
                        { name: "Infraestructura y escenarios", area: true },
                        { name: "Energía y cambio climático", area: true },
                        { name: "Residuos", area: true },
                        { name: "Agua", area: true },
                        { name: "Transporte", area: true },
                        { name: "Educación", area: true },
                    ]}
                />
            </Stack>
        </VStack>
    );
}
