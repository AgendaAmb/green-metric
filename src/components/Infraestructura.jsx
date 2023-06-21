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
        {text: "Área total de su entidad o espacio de trabajo.", type: 5, evidence: true},	
        {text: "Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, evidence: true},								
        {text: "Área total de cobertura plantada", type: 5, evidence: true},								
        {text: "Área total de cobertura forestal", type: 5, evidence: true},								
        {text: "Área total de su entidad donde se lleven a cabo actividades académicas (incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos).", type: 5, evidence: true}
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
