"use client";
import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    Button
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";

export default function Residuos() {
    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Residuos</h1>
            <Text className="blue text-start expand-3">En este apartado se busca recopilar la información en torno a los programas de tratamiento y reciclaje de residuos que cada una de las entidades posee o implementa de modelos existentes en la UASLP, ya que se trata de un factor importante en la creación del entorno sostenible. Todas las personas somos consumidores, en consecuencia, somos generadoras de residuos al igual que se producen tras el ejercicio de nuestras actividades laborales, en distintas medidas, por lo que las entidades deben tomar nota de su producción de residuos, así como de los esfuerzos de reciclaje.</Text>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
        
            <h3 className="expand-2 green">3.1 Cantidad de residuos sólidos urbanos (RSU).</h3>
                <ModuleInput elements={[{ text: "3.1.1 Indicar la cantidad de RSU en kg, que se recolectan por semana", type: 4, question:'a_3-1-1' }, { text: "3.1.2 Indicar el porcentaje de estos RSU que son valorizados para su reciclaje.", type: 3, question:'a_3.1.2' }]} />
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
            <h3 className="expand-2 green">3.2 Cantidad (kg) de residuos orgánicos.</h3>
                <ModuleInput elements={[{
                    text: "3.2.1 Cantidad de residuos orgánicos producidos por semana(kg).", type: 4
                    , evidence: true, maxPhotos: 3, question:'a_3-2-1'
                }, { text: "3.2.2 Cantidad de residuos orgánicos tratados por semana (Compostaje en casa, servicio particular, jardines, Unihuerto, etc. (kg)).", type: 2, evidence: true, maxPhotos: 3, question:'a_3-2-2' }]}/>
                <h3 className="expand-2">3.2.3 Porcentaje de implementación de programa para
                tratamiento de residuos orgánicos.</h3>
                <ModuleInput elements={[{
                    text: "3.2.3.1 ¿Cuenta con un programa de tratamiento de residuos orgánicos?", type: 4, dicotomic: true, questionDicotomic:'a_3-2-3-1', vertical: true
                }, { text: "3.2.3.2 Nombre del programa implementado", holder: "Nombre del programa", type: 1, question:'a_3-2-3-2', vertical: true, span: false}]}/>
                <ModuleInput elements={[{text: "3.2.3.3 Indicar el porcentaje de residuos orgánicos que son tratados con el programa.", half: true, question: 'a_3-2-3-3', vertical: true, }]} select={["0%",
                "1 - 25%",
                "26 - 50%",
                "51 - 75%",
                "76 - 100%",
                ]} />
                <ModuleInput elements={[{ evidence: true, span: true }]} />
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="expand-2 green">
                    3.3 Porcentaje de implementación del programa de separación de RSU de la UASLP
                </h3>
                <ModuleInput elements={[{ text: "3.3.1 ¿Cuenta con un programa de separación de residuos sólidos urbanos?", type: 3, dicotomic: true, questionDicotomic:'a_3-3-1' }, { text: "3.3.1.1 ¿Cual?", type: 1, holder: "Respuesta abierta", question:'a_3-3-1-1'}, { text: "3.3.1.2 Número de actividades o dinámicas de separación (papel, botellas de PET, taparroscas, latas, etc.)", type: 2, question:'a_3-3-1-2' }, { evidence: true, span: true, maxPhotos: 3 }]} />
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
            <h3 className="expand-2 green">
                    3.4 Cantidad (kg) de residuos inorgánicos
                </h3>
                <ModuleInput elements={[{ text: "3.4.1 Cantidad de residuos inorgánicos producidos por semana (kg).", type: 2, evidence: true, maxPhotos: 3, question:'a_3-4-1' }, { text: "3.4.2 Cantidad de residuos inorgánicos procesados por semana (separados, recuperados, reciclados, etc (kg)).", type: 2, evidence: true, maxPhotos: 3, question:'a_3-4-2' }]}/>

                <ModuleInput elements={[{ text: "3.4.3.1 ¿Cuenta con un programa de tratamiento de residuos inorgánicos?", dicotomic: true, questionDicotomic:'a_3-4-3-1'}, { text: "3.4.3.2 Nombre del programa implementado", type: 1, holder: "Nombre del programa", question:'a_3-4-3-2' }, { text: "3.4.3.3 Indicar el porcentaje de residuos inorgánicos que son tratados con el programa.", type: 3, question:'a_3-4-3-3' }, { evidence: true, span: true, maxPhotos: 3 }]} title={"3.4.3 Porcentaje de implementación de programa(s) para tratamiento de residuos inorgánicos."} />

            </Stack>



            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="expand-2 green">
                    3.5 Porcentaje de tratamiento para residuos peligrosos (con características CRETIB).
                </h3>

                <ModuleInput elements={[{ text: "3.5.1 Cantidad de residuos tóxicos producidos al semestre (kg) (Reactivos, Tóner, lámpara de  Hg, productos de limpieza, etc).", type: 2, evidence: true, maxPhotos:3, question:'a_3-5-1' }, { text: "3.5.2 Cantidad de residuos tóxicos tratados por semana (kg).", type: 4, evidence: true, maxPhotos: 3, question:'a_3-5-2' }]} />

                <ModuleInput elements={[{ text: "3.5.3.1 ¿Cuentan con protocolos de manejo, tratamiento y disposición de estos residuos", dicotomic: true, questionDicotomic:'a_3-5-3-1' }, { text: "3.5.3.2 ¿Cuántos kg de residuos entregaron a disposición durante el 2022?", type: 4, question:'a_3-5-3-2-1' }, { text: "3.5.3.3 Porcentaje de residuos tóxicos que son entregados a disposición.", type: 3, question:'a_3-5-3-3-1' }, { evidence: true, span: 2, maxPhotos: 3 }]} title="3.5.3 Porcentaje de implementación de programa para tratamiento de residuos tóxicos." />
            </Stack>


            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
            <h3 className="expand-2 green">
                    3.6 Número de programas en torno a consumo responsable (reparación, reúso, trueque). </h3>
                <ModuleInput elements={[{ type: 2, holder: "Total de programas", evidence: true, span: true, maxPhotos: 3, question:'a_3-6' }]} />
            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
            <h3 className="expand-2 green">
                    3.7 Cantidad en kg de materiales recuperados para  programas de consumo responsable.

                </h3>
                <ModuleInput elements={[{ type: 4, evidence: true, span: true, maxPhotos:3 , question:'a_3-7'}]} />

            </Stack>
            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
            <h3 className="expand-2 green">
                    3.8 Cantidad de planes de manejo para los residuos de acuerdo con su clasificación
                </h3>
                <ModuleInput elements={[{ text: "3.8.1 Residuos sólidos urbanos", left: "RSU", type: 2, question:'a_3-8-1', vertical: "true" }, { text: "3.8.2 Residuos de manejo especial", left: "RME", type: 2, question:'a_3-8-2', vertical: "true"}, { text: "3.8.3 Residuos peligrosos", left: "RP", type: 2, vertical: "true" }, { evidence: true, span: true, maxPhotos:3, question:'a_3-8-2'}]} />
            </Stack>
            <CustomTextArea title="3.9 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica cosntructiva, observaciones. te lo agradecemos." />
            <Button type="submit">Subir</Button>
        </VStack>

    );
}
