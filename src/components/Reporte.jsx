"use client";
import { VStack, StackDivider,Stack } from "@chakra-ui/react"
import CustomTextArea from "./CustomTextArea";

export default function Reporte() {
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200"/>}
            padding="30px"
            spacing={"30px"}
        >

            <Stack
                w="100%">
                <CustomTextArea maxCharacters={5000} title={"Escriba un reporte general que indique las generalidades de la dependencia"} />
            </Stack>
        </VStack>
    )
}