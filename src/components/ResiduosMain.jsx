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
import ModuleInput from "./ModuleInput";

export default function ResiduosMain() {
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Residuos</h1>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <ModuleInput elements={[{ text: "Indicar la cantidad de RSU en kg, que se recolectan por semana", type: 4 }, { text: "Indicar el porcentaje de estos RSU que son valorizados para su reciclaje.", type: 3 }]} title={"Cantidad de residuos sólidos urbanos (RSU)."} />
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <ModuleInput elements={[{
                    text: "Cantidad de residuos orgánicos producidos por semana(kg).", type: 4
                    , evidence: true
                }, { text: "Cantidad de residuos orgánicos tratados por semana (Compostaje en casa, servicio particular, jardines, Unihuerto, etc. (kg)).", type: 2, evidence: true }]} title={"Cantidad(kg) de residuos orgánicos."} />
                <ModuleInput elements={[{
                    text: "¿Cuenta con un programa de tratamiento de residuos orgánicos?", type: 4, dicotomic: true
                }, { text: "Nombre del programa implementado", holder: "Nombre del programa", type: 1 }, { text: "Indicar el porcentaje de residuos orgánicos que son tratados con el programa.", type: 3, span: true, half: true }, { evidence: true, span: true }]} title="Porcentaje de implementación de programa para
                tratamiento de residuos orgánicos."/>
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="blue" w="100%">
                    Porcentaje de implementación del programa de separación de RSU de la UASLP

                </h3>
                <ModuleInput elements={[{ text: "¿Cuenta con un programa de separación de residuos sólidos urbanos?", type: 3, dicotomic: true }, { text: "¿Cual?", type: 1, holder: "Respuesta abierta" }, { text: "¿Cuenta con actividades o  dinámicas de separación (papel, botellas de PET, taparroscas, latas,etc.)?", type: 1, holder: "Respuesta abierta", evidence: true }]} title={"Cantidad de residuos sólidos urbanos (RSU)."} />
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">

                <ModuleInput elements={[{ text: "Cantidad de residuos inorgánicos producidos por semana (kg).", type: 2, evidence: true }, { text: "Cantidad de residuos inorgánicos procesados por semana (separados, recuperados, reciclados, etc (kg)).", type: 2, evidence: true }]} title={"Cantidad (kg) de residuos inorgánicos"} />

                <ModuleInput elements={[{ text: "¿Cuenta con un programa de tratamiento de residuos inorgánicos?", dicotomic: true, }, { text: "Nombre del programa implementado", type: 1, holder: "Nombre del programa" }, { text: "Indicar el porcentaje de residuos inorgánicos que son tratados con el programa.", type: 3 }, { evidence: true, span: true }]} title={"Porcentaje de implementación de programa(s) para tratamiento de residuos inorgánicos."} />

                <ModuleInput elements={[{ text: "Cantidad de residuos inorgánicos producidos por semana (kg).", type: 2, evidence: true }, { text: "Cantidad de residuos inorgánicos procesados por semana (separados, recuperados, reciclados, etc (kg)).", type: 2, evidence: true }]} title={"Cantidad (kg) de residuos inorgánicos"} />

                <ModuleInput elements={[{ text: "¿Cuenta con un programa de tratamiento de residuos inorgánicos?", dicotomic: true }, { text: "Nombre del programa implementado", type: 1 }, { text: "Nombre del programa implementado", type: 3 }, { evidence: true, span: 2 }]} title={"Porcentaje de implementación de programa(s) para tratamiento de residuos inorgánicos."} />
            </Stack>



            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="expand-2 blue">
                    Porcentaje de tratamiento para residuos peligrosos (con características CRETIB).

                </h3>

                <ModuleInput elements={[{ text: "Cantidad de residuos tóxicos producidos al semestre (kg) (Reactivos, Tóner, lámpara de  Hg, productos de limpieza, etc).", type: 2, evidence: true }, { text: "Cantidad de residuos tóxicos tratados por semana (kg).", type: 4, evidence: true }]} />

                <ModuleInput elements={[{ text: "¿Cuentan con protocolos de manejo, tratamiento y disposición de estos residuos", dicotomic: true }, { text: "Porcentaje de residuos inorgánicos que son tratados.", type: 3 }, { text: "Porcentaje de residuos tóxicos que son entregados a disposición.", type: 3 }, { evidence: true, span: 2 }]} title="Porcentaje de implementación de programa para tratamiento de residuos tóxicos." />
            </Stack>



            <Stack spacing="30px" w="100%" className="column-2 grid-center" padding="30px">
                <h3 className="expand-2 blue self-start">Número de programas en torno a consumo responsable (reparación, reúso, trueque).
                </h3>



                <InputGroup maxW="90%">
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="123"
                    />
                    <Input placeholder="Total programas" type="number" />
                </InputGroup>
                <ImageSection
                    title={"Evidencias"}
                    classes={["no-overflow"]}
                />


            </Stack>
            <Stack spacing="30px" w="100%" className="column-2 grid-center" padding="30px">
                <h3 className="expand-2 blue self-start">Cantidad en kg de materiales recuperados para  programas de consumo responsable.
                </h3>



                <InputGroup maxW="90%">
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="kg"
                    />
                    <Input placeholder="Cantidad numérica" type="number" />
                </InputGroup>
                <ImageSection
                    title={"Evidencias"}
                    classes={["no-overflow"]}
                />


            </Stack>
            <Stack spacing="30px" w="100%" className="column-2 grid-center" padding="30px">
                <h3 className="expand-2 blue self-start">Cantidad de planes de manejo para los residuos de acuerdo con su clasificación

                </h3>


                <Stack w="100%" className="grid-center">

                    <Text>RSU</Text>
                    <InputGroup maxW="90%">
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="123"
                        />
                        <Input placeholder="Cantidad numérica" type="number" />
                    </InputGroup>
                    <Text>RME</Text>
                    <InputGroup maxW="90%">
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="123"
                        />
                        <Input placeholder="Cantidad numérica" type="number" />
                    </InputGroup>
                    <Text>RP</Text>
                    <InputGroup maxW="90%">
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="123"
                        />
                        <Input placeholder="Cantidad numérica" type="number" />
                    </InputGroup>
                </Stack>
                <ImageSection
                    title={"Evidencias"}
                    classes={["no-overflow"]}
                />


            </Stack>

        </VStack>
    );
}
