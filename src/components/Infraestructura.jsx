"use client";
import {
    Stack,
    VStack,
    Text,
    StackDivider,
    Button
} from "@chakra-ui/react";

import { useEffect, useState, useContext } from 'react';

import AddModule from "./AddModule";
import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";
import { FormContext } from "../app/providers";


export default function Infraestructura() {
    const [year, setYear] = useState(2013);
    const [species, setSpecies] = useState(2);
    const [products, setProducts] = useState(2);
    const [facilities, setFacilities] = useState(2);
    const [maintanances, setMaintainances] = useState(2);
    const [animals, setAnimals] = useState(2);
    const [measure, setMeasure] = useState(2);
    const context = useContext(FormContext);
    const data =
        [
            { text: "1.2.1 Área total de su entidad o espacio de trabajo.", type: 5, question: 'a_1_2_1' },
            { text: "1.2.2 Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, question: 'a_1_2_2' },
            { text: "1.2.3 Área total de cobertura plantada", type: 5, question: 'a_1_2_3' },
            { text: "1.2.4 Área total de cobertura forestal", type: 5, question: 'a_1_2_4' },
            { text: "1.2.5 Área total de su entidad donde se lleven a cabo actividades académicas.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.5 Actividades académicas", helper: "(incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos)", question: 'a_1_2_5' },
            { text: "1.2.6 ¿Cuántos edificios componen tu entidad?", type: 5, question: 'a_1_2_6' },
            { text: "1.2.7 Área total de la planta baja de los edificios de su entidad de trabajo.", type: 5, question: 'a_1_2_7' },
            { text: "1.2.8 Área total construida de su entidad de trabajo.", helper: "(tome en cuenta los distintos niveles que conforman las edificaciones)", type: 5, question: 'a_1_2_8' },
            { text: "1.2.9 Área correspondiente a jardines verticales.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.9 Jardines verticales", question: 'a_1_2_9' },
            { text: "1.2.10 Área de techos verdes.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.10 Techos verdes", question: 'a_1_2_10' },
            { text: "1.2.11 Área de azoteas útiles (con accesos seguros, multiusos, etc).", type: 5, evidence: true, maxPhotos: 4, title: "1.2.11 Azoteas útiles", question: 'a_1_2_11' },
            { text: "1.2.12 Área destinada a la siembra de alimentos y plantas medicinales", type: 5, evidence: true, maxPhotos: 4, title: "1.2.12 Siembra de alimentos y plantas medicinales", question: 'a_1_2_12' },
            { text: "1.2.13 Área destinada a la siembra de plantas que promueven la polinización.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.13 Siembra y polinización", question: 'a_1_2_13' },
            { text: "1.2.14 Área de estacionamientos sin asfalto o concreto; pueden tener grava, adoquín o asfalto permeable.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.14 Estacionamientos sin asfalto o concreto", question: 'a_1_2_14' },
            { text: "1.2.15 Área total en el campus destinada para la absorción de agua; además de bosque y vegetación plantada.", helper: "(suelo, césped, bloque de hormigón, campo sintético, etc.)", type: 5, evidence: true, maxPhotos: 4, title: "1.2.15 Absorción de agua", question: 'a_1_2_15' },
            { text: "1.2.16 Área de estacionamientos con sombreado natural.", type: 5, evidence: true, maxPhotos: 4, title: "1.2.16 Sombreado natural", question: 'a_1_2_16' },
        ]

    const [components, setComponents] = useState([]);
    const [components2, setComponents2] = useState([]);
    const [components3, setComponents3] = useState([]);
    const [components4, setComponents4] = useState([]);
    const [components5, setComponents5] = useState([]);
    const [components6, setComponents6] = useState([]);

    const item = () => {
        const newMod = [
            ...components,
            { text: `Nombre común especie: ${species + 1}`, type: 1, question: `a_1_1_${species + 1}_1` },
            { text: "Nombre científico: ", type: 1, question: `a_1_1_${species + 1}_2` },
            { question: `a_1_1_${species + 1}_2`, evidence: true, maxPhotos: 1 }
        ];
        setComponents(newMod);
        setSpecies(species + 1);
    }


    const item2 = () => {
        const newMod2 = [...components2, { type: 1, holder: `Nombre del producto ${products}`, question: `a_1_3_1_${products}_2` }, { type: 4, holder: "Cantidad (kg)", question: `a_1_3_1_${products}_1` }, { question: `a_1_3_1_${products}_1`, evidence: true }];
        setComponents2([...newMod2]);
        setProducts(products + 1);
    }

    const item3 = () => {
        const newMod3 = [...components3, {noAddon: true, type: 1,  holder: `Nombre de la instalación ${facilities}`, evidence: true, question: `a_1_3_6_${facilities}` }];
        setComponents3([...newMod3]);
        setFacilities(facilities + 1);
    }

    const item4 = () => {
        const newMod4 = [...components4, { type: 5, evidence: true, maxPhotos: 5, question: `a_1_3_7_${maintanances}` }];
        setComponents4([...newMod4]);
        setMaintainances(maintanances + 1)
    }
    const item5 = () => {
        const newMod5 = [...components5, { type: 1, question: `a_1_3_11_${animals}_2` }, { type: 2, question: `a_1_3_11_${animals}_1` }, { question: `a_1_3_11_${animals}_1`, evidence: true }];
        setComponents5([...newMod5]);
        setAnimals(animals + 1)
    }


    const item6 = () => {
        const newMod6 = [...components6, { type: 1, holder: "Nombre de la medida", evidence: true, question: `a_1_4_6_${measure}` }];
        setComponents6([...newMod6]);
        setMeasure(measure + 1);
    }


    const popModule = (componentnumber) => {
        switch (componentnumber) {
            case 1:
                if (components.length > 1) {
                    const updatedComps = components.filter((_, index) => index > 2);
                    setComponents(updatedComps);
                    setSpecies(species - 1);
                }
                break;
            case 2:
                if (components2.length > 1) {
                    const updatedComps = components2.filter((_, index) => index > 2);
                    setComponents2(updatedComps);
                    setProducts(products - 1);

                }
                break;
            case 3:
                if (components3.length > 0) {
                    const updatedComps = components3.slice(0, components3.length - 1);
                    setComponents3([...updatedComps]);
                    setFacilities(facilities - 1);
                    console.log("Eliminado");
                }
                break;
            case 4:
                if (components4.length > 0) {
                    const updatedComps = components4.slice(0, components4.length - 1);
                    setComponents4([...updatedComps]);
                    setMaintainances(maintanances - 1);
                }
                break;
            case 5:
                if (components5.length > 1) {
                    const updatedComps = components5.filter((_, index) => index > 2);
                    setComponents5(updatedComps);
                    setAnimals(animals - 1);
                }
                break;
            case 6:
                if (components6.length > 0) {
                    const updatedComps = components6.slice(0, components6.length - 1);
                    setComponents6([...updatedComps]);
                    setMeasure(measure - 1);
                }
                break;
        };
    }

    useEffect(() => {
        setYear(new Date().getFullYear());

        const { values: answers } = context;
        if (answers) {
            const regex_1 = /^a_1_1_(?!1|2|0).*_1$/;
            let checkItem = Object.keys(answers).filter((el) => regex_1.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item();
                checkItem = 0;
            }

            const regex_2 = /^a_1_3_1_(?!1|0).*_1$/;
            checkItem = Object.keys(answers).filter((el) => regex_2.test(el)).length;
            
            for (let i = 0; i < checkItem; i++) {
                item2();
                checkItem = 0;
            }
            const regex_3 = /^a_1_3_6_(?!0|1)/;
            checkItem = Object.keys(answers).filter((el) => regex_3.test(el)).length;
            
    
            for (let i = 0; i < checkItem; i++) {
                item3();
                checkItem = 0;
            }
            const regex_4 = /^a_1_3_7_(?!0|1)/;
            checkItem = Object.keys(answers).filter((el) => regex_4.test(el)).length;
            for (let i = 0; i < checkItem; i++) {
                item4();
                checkItem = 0;
            }
            const regex_5 = /^a_1_3_11_(?!0|1)\d+_1$/;
            checkItem = Object.keys(answers).filter((el) => regex_5.test(el)).length;
            for (let i = 0; i < checkItem; i++) {
                item5();
                checkItem = 0;
            }
            const regex_6 = /^a_1_4_6_(?!0|1)/;
            checkItem = Object.keys(answers).filter((el) => regex_6.test(el)).length;
            for (let i = 0; i < checkItem; i++) {
                item6();
                checkItem = 0;
            }
        }
    }, [year]);

    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Infraestructura y escenarios</h1>
            <Text className="blue text-start expand-3">En este apartado se busca recopilar la información básica relacionada con las políticas internas de cada una de las entidades en materia de sustentabilidad y medio ambiente. Además, incluye apartados para conocer sobre la biodiversidad presente en nuestros espacios de trabajo (vegetación y fauna), así como acciones y medidas que se toman con enfoque de salvaguarda de medio ambiente y en torno al desarrollo de energía sostenible.</Text>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(1)}>-</Button>
                </Stack>

                <h3 className="expand-2 green"><strong>1.1 </strong>Indique qué tipos de especies de plantas y otro tipo de vegetación existen en su entidad. </h3>
                <Text className="blue text-start expand-3">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro.</Text>

                <ModuleInput elements={[{ text: `Nombre común especie 1:`, type: 1, question: `a_1_1_1_1` }, { text: "Nombre científico: ", type: 1, question: `a_1_1_1_2` }, {question: 'a_1_1_1_2', evidence: true, maxPhotos: 1 }]} inputLarge={true} />

                <ModuleInput elements={[{ text: `Nombre común especie 2:`, type: 1, question: `a_1_1_2_1` }, { text: "Nombre científico: ", type: 1, question: `a_1_1_2_2` }, { question: 'a_1_1_2_2', evidence: true, maxPhotos: 1 }]} inputLarge={true} />

                <ModuleInput elements={components} />

            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-2 expand-2">
                <h3 className="expand-2 green">1.2 Indique en el recuadro punteado el área (m2) de los espacios mencionados a continuación:</h3>
                <ModuleInput elements={data} text={"En caso de que aplique, añadir evidencia fotográfica de cada uno de los espacios indicados."} />
            </Stack>
            <Stack spacing="30px" padding="30px" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item2}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(2)}>-</Button>
                </Stack>
                <h3 className="expand-2 green"><strong>1.3 </strong>Responda a los siguientes requerimientos: </h3>
                <Text className="expand-3 blue text-start">1.3.1 Producción de alimentos y plantas medicinales. hortalizas, hongos etc. </Text>
                <Text className="blue text-start expand-3">Indique el nombre del producto presente en su entidad y mencione la cantidad que producen mensualmente (en kg) y posteriormente coloque el nombre del producto en los recuadros punteados y añada evidencia fotográfica en el recuadro de mayor tamaño en caso de aplicar.</Text>
                <ModuleInput elements={[{ type: 1, holder: "Nombre del producto 1", question: 'a_1_3_1_1_2' }, { type: 4, holder: "Cantidad (kg)", question: 'a_1_3_1_1_1' }, {question: 'a_1_3_1_1_1', evidence: true }]} noColumn={true} />
                <ModuleInput elements={components2} noColumn={true} />
                <Stack spacing="30px" padding="30px" width={"100%"} className="expand-3 column-3" >
                    <Stack spacing="30px">
                        <ModuleInput elements={[{ type: 6, holder: year - 3, question: 'a_1_3_2_1' }, { type: 6, holder: year - 2, question: 'a_1_3_2_2' }, { type: 6, holder: year - 1, question: 'a_1_3_2_2' }]} text="1.3.2 Proporcione el presupuesto (MXN) promedio anual de su entidad durante los últimos 3 años." />
                    </Stack>
                    <Stack spacing="30px" w="100%" className="expand-2" >
                        <ModuleInput elements={[{ text: "1.3.3 Cantidad de recursos (MXN) invertidos de su entidad en esfuerzos por la sostenibilidad.", question: 'a_1_3_3_1', helper: "(P.e. Disposición de residuos, mantenimiento de instalaciones, cambio de mobiliarios a bienes sostenibles, educación ambiental, etc.)", type: 6 }]} />
                    </Stack>
                    <Stack spacing="30px" direction="column" className="expand-3 column-2">
                        <h4>1.3.4 Cantidad de Instalaciones destinadas a personas con discapacidad y/o maternidad</h4>
                        <ModuleInput
                            text="1.3.4.1 Números de Espacio de estacionamiento adecuado" elements={[{ type: 2, question: 'a_1_3_4_1' },]} />
                        <Stack direction={"column"} className="expand-3">
                            <ModuleInput title="Infraestructura y equipos adecuados y/o adaptados" elements={[{ text: "1.3.4.2 Número de baños adaptados", type: 2, vertical: true, question: 'a_1_3_4_2' }, { text: "1.3.4.3 Número de espacios de lactancia", type: 2, vertical: true, question: 'a_1_3_4_3' }, { text: "1.3.4.4 Número de rampas de acceso", type: 2, vertical: true, question: 'a_1_3_4_4' }, { text: "1.3.4.5 Número de elevadores adaptados", type: 2, vertical: true, question: 'a_1_3_4_5' }, { text: "1.3.4.6 Número de carteles o anuncios en braille", type: 2, vertical: true, question: 'a_1_3_4_6' }, { text: "1.3.4.7 Número de salidas de emergencia", type: 2, vertical: true, question: 'a_1_3_4_7' }, {
                                text: "1.3.4.8 Otros", type: 1, vertical: true, holder: "¿Cuál?", additional: {
                                    type: 2,
                                    holder: "¿Cuantos?",
                                    question: 'a_1_3_4_8',
                                }
                            },]} />
                            <Stack className="column-2 grid-center">
                                <ModuleInput elements={[{ disabled: true, type: -1, text: "Total: ", holder: "Total", question: 'a_1_3_4_10' },]} />
                                <ModuleInput elements={[{ question: 'a_1_3_4_8', evidence: true, maxPhotos: 4 }]} />
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
                        , question: 'a_1_3_5_1'
                    }
                }, {
                    text: "1.3.5.2 Profesores", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                        , question: 'a_1_3_5_2'
                    }
                }, {
                    text: "1.3.5.3 Administrativos", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                        , question: 'a_1_3_5_3'
                    }
                }, {
                    text: "1.3.5.4 Staff", type: 2, vertical: true, holder: "Número de espacios", additional: {
                        type: 2,
                        holder: "(0% - 100%)"
                        , question: 'a_1_3_5_4'
                    }
                },]} />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item3}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(3)}>-</Button>
                </Stack>
                <ModuleInput elements={[{ noAddon: true, type: 1, holder: "Nombre de la instalación", evidence: true, question: 'a_1_3_6_1' }]} title={"1.3.6 Instalaciones destinadas a la salud. Mencione aquellas con las que cuente (ej. Módulo pips,enfermería, clínica con personal y con acceso al público)."} emptyStart={true} />
                <ModuleInput elements={components3} />
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item4}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(4)}>-</Button>
                </Stack>
                <Text className="expand-2">1.3.7 Porcentaje de actividades de operación y mantenimiento de sus instalaciones en el 2022.
                </Text>
                <Text className="expand-2">El porcentaje se define como (Área total de construcción operada y con mantenimiento / Área total de edificios de su entidad) × 100%.
                </Text>
                <ModuleInput title="Áreas de tu entidad en mantenimiento este año" elements={[{ type: 5, evidence: true, maxPhotos: 5, question: 'a_1_3_7_1' }]} />
                <ModuleInput elements={components4} />
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item5}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(5)}>-</Button>
                </Stack>
                <Text className="expand-2">1.3.8 Porcentaje de implementación de programa para la conservación de plantas, animales, vida silvestre y recursos genéticos.</Text>
                <ModuleInput elements={[{ question: 'a_1_3_8_2', vertical: true }]} select={["0%",
                    "1 - 25%",
                    "26 - 50%",
                    "51 - 75%",
                    "76 - 100%",
                ]} />
                <ModuleInput elements={[{ text: "1.3.9 Número de protocolos para cuidar bioseguridad (OGM, patógenos, RPBI, otros).", type: 2, question: 'a_1_3_9_2' }, { text: "1.3.10 Número de protocolos de bioética.", type: 2, question: 'a_1_3_10_1' }]} />
                <Stack spacing="30px" className="row">
                    <ModuleInput text="1.3.11 Número de animales reubicados, apoyados y conservados de acuerdo a algún protocolo. De ser el caso, indique especie y anexe evidencia." elements={[{ type: 2, question: 'a_1_3_11_1_1' }]} />
                    <ModuleInput elements={[{ type: 1, evidence: true, question: 'a_1_3_11_1_2' }]} />
                    <ModuleInput elements={components5} />
                </Stack>

            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2" >
                <h3 className="expand-2 green"><strong>1.4 </strong>Seguridad en las instalaciones </h3>
                <ModuleInput elements={[{ text: "1.4.1 ¿Cuentan con programas para clasificación y uso de extintores? ", dicotomic: true, vertical: true, questionDicotomic: 'a_1_4_1_1' }, { text: "1.4.2 Indique el número de extintores que tienen en total", type: 2, vertical: true, question: 'a_1_4_1_2' }, { text: "1.4.3 ¿Cuentan con señalética de seguridad? (salida de emergencia, punto de reunión, zona de alta tensión, etc). ", dicotomic: true, vertical: true, questionDicotomic: 'a_1_4_3_1' }]} />
                <Stack >
                    <ModuleInput text="1.4.4 ¿Cuentan con dispositivos para detección de siniestros?" elements={[{ text: "Seleccione los dispositivos con los que cuenta su entidad" }, { dicotomic: true, questionDicotomic: 'a_1_4_4_1' }]} checkbox={{
                        data: [
                            "Detectores de calor",
                            "Detectores de humo",
                            "Detectores de llama",
                            " Otro (Especifique)" //Agrregar celda para este campo, cambiar letra a tamano de la instruccion
                        ]
                    }} questionCheckBox={'a_1_4_4'} />

                </Stack>
                <Stack >
                    <ModuleInput text="1.4.5 ¿Cuentan con personal capacitado o protocolos de emergencia?" elements={[{ text: "Seleccione los recursos con los que cuenta su entidad" }, { dicotomic: true, questionDicotomic: 'a_1_4_5_1' }]} checkbox={{
                        data: [
                            "Plan de emergencia",
                            "Plano de levantamiento de recursos de emergencia",
                            "Unidades internas de Protección Civil",
                            "Brigada de primeros auxilios"
                        ]
                    }} questionCheckBox={'a_1_4_5'} />
                </Stack>
                <Stack spacing="30px" className="expand-2 column-3" position={"relative"}>
                    <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                        <Button className="add-button" onClick={item6}>+</Button>
                        <Button className="delete-button" onClick={() => popModule(6)}>-</Button>
                    </Stack>
                    <h3>{" "}</h3>
                    <h3>{" "}</h3>
                    <h3>1.4.6 Medidas de seguridad y protección en su infraestructura y en qué consisten (ej. botón de pánico, respuesta a siniestros, enfermería). </h3>
                    <Text className="blue text-start expand-3">Coloque el nombre de la medida de seguridad en los recuadros y añada evidencia fotográfica en el recuadro de mayor tamaño.</Text>
                    <Stack spacing="30px">
                        <ModuleInput elements={[{ type: 1, holder: "Nombre de la medida", evidence: true, question: 'a_1_4_6_1' }]} />
                    </Stack>
                    <ModuleInput elements={components6} />
                </Stack>
            </Stack>
            <CustomTextArea title="1.5 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. Te lo agradecemos)" />
            
        </VStack>
    );
}