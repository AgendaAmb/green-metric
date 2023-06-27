import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    Icon
} from "@chakra-ui/react";

import { useEffect, useState } from 'react';

import { MdLibraryAdd } from 'react-icons/md';


import DropImage from "./DropImage";
import ModuleInput from "./ModuleInput";
export default function Infraestructura() {
    const [year, setYear] = useState(2013);
    const [species, setSpecies] = useState(2);
    const data =
        [
            { text: "1.2.1 Área total de su entidad o espacio de trabajo.", type: 5 },
            { text: "1.2.2 Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, },
            { text: "1.2.3 Área total de cobertura plantada", type: 5, },
            { text: "1.2.4 Área total de cobertura forestal", type: 5, },
            { text: "1.2.5 Área total de su entidad donde se lleven a cabo actividades académicas.", type: 5, evidence: true, title: "Actividades académicas", helper: "(incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos)" }, //(incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos)
            { text: "1.2.6 ¿Cuántos edificios componen tu entidad?", type: 5, },
            { text: "1.2.7 Área total de la planta baja de los edificios de su entidad de trabajo.", type: 5, },
            { text: "1.2.8 Área total construida de su entidad de trabajo.", helper: "(tome en cuenta los distintos niveles que conforman las edificaciones)", type: 5, },
            { text: "1.2.9 Área correspondiente a jardines verticales.", type: 5, evidence: true, title: "Jardines verticales" },
            { text: "1.2.10 Área de techos verdes.", type: 5, evidence: true, title: "Techos verdes" },
            { text: "1.2.11 Área de azoteas útiles (con accesos seguros, multiusos, etc).", type: 5, evidence: true, title: "Azotes útiles" },
            { text: "1.2.12 Área destinada a la siembra de alimentos y plantas medicinales", type: 5, evidence: true, title: "Siembra de alimentos y plantas medicinales" },
            { text: "1.2.13 Área destinada a la siembra de plantas que promueven la polinización.", type: 5, evidence: true, title: "Siembra y polinización" },
            { text: "1.2.14 Área de estacionamientos sin asfalto o concreto; pueden tener grava, adoquín o asfalto permeable.", type: 5, evidence: true, title: "Estacionamientos sin asfalto o concreto" },
            { text: "1.2.15 Área total en el campus destinada para la absorción de agua; además de bosque y vegetación plantada.", helper: "(suelo, césped, bloque de hormigón, campo sintético, etc.)", type: 5, evidence: true, title: "Absorción de agua" },
            { text: "1.2.16 Área de estacionamientos con sombreado natural.", type: 5, evidence: true, title: "Sombreado natural" },

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
            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
                <h3 className="expand-2 blue">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: `Especie ${species - 1}:`, type: 1 }, { text: "Nombre científico: ", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: `Especie ${species}:`, type: 1 }, { text: "Nombre científico: ", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2 expand-2">
                <ModuleInput elements={data} title={"En caso de que aplique, añadir evidencia fotográfica de cada uno de los espacios indicados."} />
            </Stack>
            <Stack spacing="30px" padding="30px" className="column-3">
                <h3 className="expand-2 blue"><strong>1.3 </strong>Responda a los siguientes requerimientos: </h3>
                <h4 className="expand-2 blue"><strong>1.3.1 </strong>Producción de alimentos y plantas medicinales. hortalizas, hongos etc. </h4>
                <h5 className="blue text-start">Coloque la cantidad producida mensualmente de cada uno de los productos (en kg) y posteriormente coloque el nombre del producto en los recuadros punteados y añada evidencia fotográfica en el recuadro de mayor tamaño en caso de aplicar.</h5>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ type: 4, holder: "Cantidad (kg)" }, { type: 1, holder: "Nombre del producto" }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} addTitle="Añadir producto" />
                </Stack>
                <Stack spacing="30px" padding="30px" width={"100%"} className="expand-3 column-3" >
                    <Stack spacing="30px">
                        
                        <ModuleInput elements={[{ type: 6, holder: year - 3 }, { type: 6, holder: year - 2 }, { type: 6, holder: year - 1 }]} text="1.3.2 Proporcione el presupuesto (MXN) promedio anual de su entidad durante los últimos 3 años." />

                    </Stack>
                    <Stack spacing="30px" w="100%" padding="30px" className="expand-2" >

                    <ModuleInput elements={[{ text: "1.3.3 Cantidad de recursos (MXN) invertidos de su entidad en esfuerzos por la sostenibilidad.", helper: "(P.e. Disposición de residuos, mantenimiento de instalaciones, cambio de mobiliarios a bienes sostenibles, educacion ambiental, etc.)", type: 6 }]} />
                    </Stack>
                    <Stack spacing="30px">
                    <h4>1.3.4 Cantidad de Instalaciones destinadas a personas con discapacidad y/o maternidad</h4>
                    <ModuleInput elements={[{ type: 2 }]} text= "1.3.4.1 Números de Espacio de estacionamiento adecuado" />
                    <ModuleInput elements={[{ type: 2 }, {text: "Número de Baños adaptados", type: 2, vertical: true}]} />
                    </Stack>
                </Stack>
            </Stack>



        </VStack>
    );
}
