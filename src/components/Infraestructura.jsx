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

import DropImage from "./DropImage";

export default function Infraestructura() {


    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Infraestructura y escenarios</h1>

            <DropImage />




        </VStack>
    );
}
