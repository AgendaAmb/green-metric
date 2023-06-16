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

import ImageSection from "./ImageSection";
export default function ResiduosThird() {
    return (
        <VStack
            w="80%"
            className="base-z-index scroll-y main"
            spacing={"15px"}
            padding="30px"
        >
            <h1>Residuos</h1>
            <VStack
                spacing="30px"
                w="100%"
                divider={<StackDivider borderColor="gray.200" />}
            >
                <h3 w="100%">
                    Porcentaje de implementación de programa para tratamiento de
                    residuos orgánicos.
                </h3>
                <Stack className="column-2">
                    <Stack w="100%">
                        <Stack w="100%" direction={"row"}>
                            <Text mb="8px" w="60%">
                                ¿Cuenta con un programa de tratamiento de
                                residuos orgánicos?
                            </Text>

                            <Select w="40%">
                                <option value="-1">Escoja una opción: </option>
                                <option value="1">Si</option>
                                <option value="0">No</option>
                            </Select>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Stack direction={"row"}>
                            <Text mb="8px" w="60%">
                                Nombre del programa implementado
                            </Text>
                            <InputGroup w="40%">
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    fontSize="1.2em"
                                    children="abc"
                                />
                                <Input placeholder="Nombre" type="text" />
                            </InputGroup>
                        </Stack>
                        <Stack direction={"row"}>
                            <Text mb="8px" w="60%">
                                Indicar el porcentaje de residuos orgánicos que
                                son tratados con el programa.
                            </Text>
                            <Select w="40%">
                                <option value="-1">Escoja una opción: </option>
                                <option value="0">0%</option>
                                <option value="1">0%-25%</option>
                                <option value="2">25-50%</option>
                                <option value="3">50-75%</option>
                                <option value="4">100%</option>
                            </Select>
                        </Stack>
                    </Stack>
                    <ImageSection title={"Evidencias"} classes={["expand-2"]} />
                </Stack>
            </VStack>
        </VStack>
    );
}
