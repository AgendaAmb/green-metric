import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    CheckboxGroup,
    Checkbox,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";

export default function Agua(){

    return (
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}
        >
            <h1 className="blue"> 4.1 Programa de conservación del agua</h1>
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.1 Favor de indicar si cuenta con programa de conservación del agua" elements={[{dicotomic:true, span:true}]} />

            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.2 Seleccione una condición que describa su etapa actual en un programa que apoye la conservación del agua" checkbox={["No existe un programa establecido para conservar el agua (0%)",
                "El programa se encuentra en preparación (0-10%)",
                "El programa ya está implementado pero se encuentra  en etapa inicial (11-25%)",
                "El programa ya tiene capacidad de conservar agua en porcentajes (26-50%)",
                "El programa ya tiene capacidad de conservar porcentajes 50% +",
                ]}/>
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{evidence:true}, {evidence:true}, {evidence:true}]} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.3 ¿Con cuantos sistemas de conservación de agua cuenta?"
                     elements={[{type:3}]} />
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{evidence:true}, {evidence:true}, {evidence:true}]} />
                </Stack>
            </Stack>
        </VStack>
    );

}