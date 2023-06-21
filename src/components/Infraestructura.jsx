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

import {useState} from 'react';

import {MdLibraryAdd} from 'react-icons/md';


import DropImage from "./DropImage";
import ModuleInput from "./ModuleInput";
export default function Infraestructura() {
    const [species, setSpecies] = useState(1);
    const data = 
        [
        {text: "Área total de su entidad o espacio de trabajo.", type: 5},	
        {text: "Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, },								
        {text: "Área total de cobertura plantada", type: 5, },								
        {text: "Área total de cobertura forestal", type: 5, },								
        {text: "Área total de su entidad donde se lleven a cabo actividades académicas (incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos).", type: 5, evidence: true, span: true},
        {text: "¿Cuántos edificios componen tu entidad?", type: 5, },
        {text: "Área total de la planta baja de los edificios de su entidad de trabajo.", type: 5, },
        {text: "Área total construida de su entidad de trabajo (tome en cuenta los distintos niveles que conforman las edificaciones).", type: 5, },
        {text: "Área correspondiente a jardines verticales.", type: 5, evidence: true, span: true},
        {text: "Área de techos verdes.", type: 5, evidence: true},
        {text: "Área de azoteas útiles (con accesos seguros, multiusos, etc).", type: 5, evidence: true},
        {text: "Área destinada a la siembra de alimentos y plantas medicinales", type: 5, evidence: true},
        {text: "Área destinada a la siembra de plantas que promueven la polinización.", type: 5, evidence: true},
        {text: "Área de estacionamientos sin asfalto o concreto; pueden tener grava, adoquín o asfalto permeable.", type: 5, evidence: true},
        {text: "Área total en el campus destinada para la absorción de agua; además de bosque y vegetación plantada. (suelo, césped, bloque de hormigón, campo sintético, etc.)", type: 5, evidence: true},
        {text: "Área de estacionamientos con sombreado natural.", type: 5, evidence: true},
        
    ]
    
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
            >
            <h1>Infraestructura y escenarios</h1>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2">
                <h3 className="expand-2 blue">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro</h3>
                <Stack spacing="30px">
                <ModuleInput  elements={[{text:`Especie ${species}:`, type:1}, {text: "Nombre científico: ", type: 1}, {evidence: true} ]}/>
               </Stack>
               <Stack className="grid-center">
                    <Icon as={MdLibraryAdd} role="button" fontSize="80px" className="blue icon-button"/>
                </Stack>

                
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-2">
            <ModuleInput  elements={data} title={"En caso de que aplique, añadir evidencia fotográfica de cada uno de los espacios indicados."}/>
            </Stack>



        </VStack>
    );
}
