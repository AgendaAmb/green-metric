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

    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
            >
            <h1>Infraestructura y escenarios</h1>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2">
                <h3 className="expand-2 blue">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro negro.</h3>
                <Stack spacing="30px">
                <ModuleInput  elements={[{text:`Especie ${species}:`, type:1}, {text: "Nombre científico: ", type: 1}, {evidence: true} ]}/>
               </Stack>
               <Stack className="grid-center">
                    <Icon as={MdLibraryAdd} role="button" fontSize="80px" className="blue icon-button"/>
                </Stack>
            </Stack>





        </VStack>
    );
}
