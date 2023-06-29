import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";

export default function Educacion() {
    return (
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}
        >
         <h1 className="blue">Educación</h1>
        </VStack>
    )
}