import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
} from "@chakra-ui/react";

import ImageSection from "./ImageSection";
export default function ResiduosMain() {
    return (
        <VStack
            w="80%"
            divider={<StackDivider borderColor="gray.200" />}
            className="base-z-index scroll-y main"
            spacing={"15px"}
        >
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <InputGroup>
                    <Text mb="8px">
                        Indicar la cantidad de RSU en kg, que se recolentan por
                        semana.
                    </Text>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="123"
                        />
                        <Input placeholder="Cantidad numérica" type="number" />
                    </InputGroup>
                </InputGroup>
                <InputGroup>
                    <Text mb="8px">
                        Indicar el porcentaje de estos RSU que son valorizados
                        para su reciclaje.
                    </Text>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="%"
                        />
                        <Input placeholder="Porcentaje" type="number" />
                    </InputGroup>
                </InputGroup>
            </Stack>
            <Stack
                spacing="30px"
                w="100%"
                className="column-2"
                padding="30px"
                direction={"row"}
            >
                <Stack>
                    <InputGroup>
                        <Text mb="8px">
                            Cantidad de residuos organicos producidos por semana
                            (kg) .
                        </Text>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                                children="123"
                            />
                            <Input
                                placeholder="Cantidad numérica"
                                type="number"
                            />
                        </InputGroup>
                    </InputGroup>
                    <ImageSection title={""} />
                </Stack>
                <Stack>
                    <InputGroup>
                        <Text mb="8px">
                            Cantidad de residuos organicos tratados por semana
                            (Compostaje en casa, servicio particular, jardines,
                            Unihuerto, etc. (kg)).
                        </Text>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                                children="123"
                            />
                            <Input
                                placeholder="Cantidad numérica"
                                type="number"
                            />
                        </InputGroup>
                    </InputGroup>
                    <ImageSection title={""} />
                </Stack>
            </Stack>
        </VStack>
    );
}
