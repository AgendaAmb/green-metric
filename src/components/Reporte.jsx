"use client";
import { VStack, StackDivider,Stack } from "@chakra-ui/react"
import CustomTextArea from "./CustomTextArea";

export default function Reporte() {
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <Stack className="grid-center" w="100%">
                <CustomTextArea title={"Escriba un reporte general que indique las generalidades de la dependencia"} />
            </Stack>
        </VStack>
    )
}