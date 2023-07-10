"use client";
import {
    Stack,
    VStack,
    Text,
    StackDivider,
    Button
} from "@chakra-ui/react";

import { useEffect, useState } from 'react';

import AddModule from "./AddModule";
import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";

export default function Infraestructura() {
    const [selectValue, setSelectValue] = useState("");
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value); // Actualizar el valor del Select en el estado
    };

    const [year, setYear] = useState(2013);
    const [species, setSpecies] = useState(2);
    const data =
        [
            { text: "1.2.1 Área total de su entidad o espacio de trabajo.", type: 5 },
            { text: "1.2.2 Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, },
            { text: "1.2.3 Área total de cobertura plantada", type: 5, },
            { text: "1.2.4 Área total de cobertura forestal", type: 5, },
            { text: "1.2.5 Área total de su entidad donde se lleven a cabo actividades académicas.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.5 Actividades académicas", helper: "(incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos)" },
            { text: "1.2.6 ¿Cuántos edificios componen tu entidad?", type: 5, },
            { text: "1.2.7 Área total de la planta baja de los edificios de su entidad de trabajo.", type: 5, },
            { text: "1.2.8 Área total construida de su entidad de trabajo.", helper: "(tome en cuenta los distintos niveles que conforman las edificaciones)", type: 5, },
            { text: "1.2.9 Área correspondiente a jardines verticales.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.9 Jardines verticales" },
            { text: "1.2.10 Área de techos verdes.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.10 Techos verdes" },
            { text: "1.2.11 Área de azoteas útiles (con accesos seguros, multiusos, etc).", type: 5, evidence: true, maxPhotos: 4, title: "1.2.11 Azotes útiles" },
            { text: "1.2.12 Área destinada a la siembra de alimentos y plantas medicinales", type: 5, evidence: true, maxPhotos: 4, title: "1.2.12 Siembra de alimentos y plantas medicinales" },
            { text: "1.2.13 Área destinada a la siembra de plantas que promueven la polinización.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.13 Siembra y polinización" },
            { text: "1.2.14 Área de estacionamientos sin asfalto o concreto; pueden tener grava, adoquín o asfalto permeable.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.14 Estacionamientos sin asfalto o concreto" },
            { text: "1.2.15 Área total en el campus destinada para la absorción de agua; además de bosque y vegetación plantada.", helper: "(suelo, césped, bloque de hormigón, campo sintético, etc.)", type: 5, evidence: true, maxPhotos: 4, title: "1.2.15 Absorción de agua" },
            { text: "1.2.16 Área de estacionamientos con sombreado natural.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.16 Sombreado natural" },

        ]

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Infraestructura y escenarios</h1>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3" >
                <h3 className="expand-2 green"><strong>1.1 </strong>Indique qué tipos de especies de plantas y otro tipo de vegetación existente en su entidad. </h3>

                <Text className="blue text-start expand-3">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro.</Text>

                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: `Especie ${species - 1}:`, type: 1 }, { text: "Nombre científico: ", type: 1 }, { evidence: true, maxPhotos: 1 }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" >
                    <ModuleInput elements={[{ text: `Especie ${species}:`, type: 1 }, { text: "Nombre científico: ", type: 1 }, { evidence: true, maxPhotos: 1 }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2 expand-2">
                <h3 className="expand-2 green">1.2 Indique en el recuadro punteado el área (m2) de los espacios mencionados a continuación:</h3>
                <ModuleInput elements={data} text={"En caso de que aplique, añadir evidencia fotográfica de cada uno de los espacios indicados."} />
            </Stack>
            <Stack spacing="30px" padding="30px" className="column-3">
                <h3 className="expand-2 green"><strong>1.3 </strong>Responda a los siguientes requerimientos: </h3>
                <Text className="expand-3 blue text-start">1.3.1 Producción de alimentos y plantas medicinales. hortalizas, hongos etc. </Text>
                <Text className="blue text-start expand-3">Indique el nombre del producto presente en su entidad y mencione la cantidad que producen mensualmente (en kg) y posteriormente coloque el nombre del producto en los recuadros punteados y añada evidencia fotográfica en el recuadro de mayor tamaño en caso de aplicar.</Text>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ type: 1, holder: "Nombre del producto" },{ type: 4, holder: "Cantidad (kg)" }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} addTitle="Añadir producto" />
                </Stack>
                <Stack spacing="30px" padding="30px" width={"100%"} className="expand-3 column-3" >
                    <Stack spacing="30px">
                        <ModuleInput elements={[{ type: 6, holder: year - 3 }, { type: 6, holder: year - 2 }, { type: 6, holder: year - 1 }]} text="1.3.2 Proporcione el presupuesto (MXN) promedio anual de su entidad durante los últimos 3 años." />

                    </Stack>
                    <Stack spacing="30px" w="100%" className="expand-2" >

                        <ModuleInput elements={[{ text: "1.3.3 Cantidad de recursos (MXN) invertidos de su entidad en esfuerzos por la sostenibilidad.", helper: "(P.e. Disposición de residuos, mantenimiento de instalaciones, cambio de mobiliarios a bienes sostenibles, educacion ambiental, etc.)", type: 6 }]} />
                    </Stack>
                    <Stack spacing="30px" direction="column" className="expand-3 column-2">
                        <h4>1.3.4 Cantidad de Instalaciones destinadas a personas con discapacidad y/o maternidad</h4>
                        <ModuleInput
                            text="1.3.4.1 Números de Espacio de estacionamiento adecuado" elements={[{ type: 2 },]} />
                        <Stack direction={"column"} className="expand-3">
                            <ModuleInput title="Infraestructura y equipos adecuados y/o adaptados" elements={[{ text: "1.3.4.2 Número de baños adaptados", type: 2, vertical: true }, { text: "1.3.4.3 Número de espacios de lactancia", type: 2, vertical: true }, { text: "1.3.4.4 Número de rampas de acceso", type: 2, vertical: true }, { text: "1.3.4.5 Número de elevadores adaptados", type: 2, vertical: true }, { text: "1.3.4.6 Número de carteles o anuncios en braille", type: 2, vertical: true }, { text: "1.3.4.7 Número de salidas de emergencia", type: 2, vertical: true }, {
                                text: "1.3.4.8 Otros", type: 1, vertical: true, holder: "¿Cuál?", additional: {
                                    type: 2,
                                    holder: "¿Cuantos?"
                                }
                            },]} />
                            <Stack className="column-2 grid-center">
                                <ModuleInput elements={[{ disabled: true, type: -1, text: "Total: ", holder: "Total" },]} />
                                <ModuleInput elements={[{ evidence: true, maxPhotos: 4 }]} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <Text className="expand-2">1.3.5 Indique el número de espacios destinados para cada caso, y el porcentaje será calculado automaticamente.
                </Text>
                <ModuleInput elements={[{
                    text: "1.3.5.1 Estudiantes", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                    }
                }, {
                    text: "1.3.5.2 Profesores", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                    }
                }, {
                    text: "1.3.5.3 Administrativos", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                    }
                }, {
                    text: "1.3.5.4 Staff", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                    }
                },]} />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <Text className="expand-2">1.3.6 Instalaciones destinadas a la salud. Mencione aquellas con las que cuente (ej. Módulo pips,enfermería, clínica con personal y con acceso al público).
                </Text>
                <ModuleInput elements={[{ type: -1, holder: "Nombre de la instalación", evidence: true }]} />
                <AddModule />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <Text className="expand-2">1.3.7 Porcentaje de actividades de operación y manetenimeinto de sus instalaciones en el 2022.
                </Text>
                <Text className="expand-2">El porcentaje se define como (Área total de construcción operada y con mantenimiento / Área total de edificios de su entidad) × 100%.
                </Text>

                <ModuleInput title="Áreas de tu entidad en mantenimiento este año" elements={[{ type: 5, evidence: true, maxPhotos: 5 }]} />
                <AddModule />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <Text className="expand-2">1.3.8 Porcentaje de implementación de programa para la conservación de plantas, animales, vida silvestre y recursos genéticos.</Text>
                <ModuleInput elements={[{ dicotomic: true }, { type: 3, disabled: true }]} hasSelect={true}/>
                <ModuleInput elements={[{ text: "1.3.9 Número de protocolos para cuidar bioseguridad (OGM, patógenos, RPBI, otros).", type: 2 }, { text: "1.3.10 Número de protocolos de bioética.", type: 2 }]}/>

                <Stack>
                    <ModuleInput text="1.3.11 Número de animales reubicados, apoyados y conservados de acuerdo a algún protocolo. De ser el caso, indique especie y anexe evidencia." elements={[{ type: 2 }]} />
                    <ModuleInput elements={[{ type: 1, evidence: true }]} />

                </Stack>
                <AddModule />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <h3 className="expand-2 green"><strong>1.4 </strong>Seguridad en las instalaciones </h3>
                <ModuleInput elements={[{ text: "1.4.1 ¿Cuentan con programas para clasificación y uso de extintores? ", dicotomic: true, vertical: true }, { text: "1.4.2 Indique el numero de extintores que tienen en total", type: 2, vertical: true }, { text: "1.4.3 ¿Cuentan con señalética de seguridad? (salida de emergencia, punto de reunion, zona de alta tensión, etc). ", dicotomic: true, vertical: true }]} />
                <Stack >
                    <ModuleInput text="1.4.4 ¿Cuentan con dispositivos para detección de siniestros?" elements={[{ text: "Seleccione los dispositivos con los que cuenta su entidad" }, { dicotomic: true }]} checkbox={{
                        data: [
                            "Detectores de calor",
                            "Detectores de humo",
                            "Detectores de llama",
                            " Otro (Especifique en la siguiente celda)"
                        ]
                    }} />

                </Stack>
                <Stack >
                    <ModuleInput text="1.4.5 ¿Cuentan con personal capacitado o protocolos de emergencia?" elements={[{ text: "Seleccione los recursos con los que cuenta su entidad" }, { dicotomic: true }]} checkbox={{
                        data: [
                            "Plan de emergencia",
                            "Plano de levantamiento de recursos de emergencia",
                            "Unidades internas de Protección Civil",
                            "Brigada de primeros auxilios"
                        ]
                    }} />
                </Stack>
                <Stack className="expand-2 column-2">
                    <Text className="expand-2">1.4.6 Medidas de seguridad y protección en su infraestructura y en qué consisten (ej. botón de pánico, respuesta a siniestros, enfermería). </Text>

                    <ModuleInput text="Coloque el nombre de la medida de seguridad en los recuadros y añada evidencia fotográfica en el recuadro de mayor tamaño." elements={[{ type: 1, holder: "Nombre de la medida", evidence: true }]} />
                    <AddModule />

                </Stack>
            </Stack>
            <CustomTextArea title="1.5 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica cosntructiva, observaciones. te lo agradecemos." />
            <Button type="submit">Subir</Button>
        </VStack>
    );
}
