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
    CheckboxGroup,
    Checkbox,
    Button,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";

export default function Agua(){

    return (
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}
        >
            <h1 className="blue"> Agua</h1>
            <h2 className="green"> 4.1 Programa de conservación del agua</h2>
             <Text className="blue text-start expand-3">El abasto de agua potable alcanza niveles de alarma para la población de las cuatro regiones del estado de San Luis Potosí. Por esta razón, la Universidad, tiene como objetivo abordar de manera integral los retos y problemáticas asociadas al recurso hídrico en el estado. Por ello, en este apartado se busca recopilar la información en torno a los programas y acciones que cada una de las entidades implementa con la finalidad de optimizar el uso del agua, aumentar su conservación y medir el uso de agua que se hace en las entidades.</Text>
            {/* TODO: SI SE SELECCIONA "SI", DESPLEGAR EL FORMULARIO */}
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.1 Favor de indicar si cuenta con programa de conservación del agua" elements={[{dicotomic:true, questionDicotomic: 'a_4_1_1',span:true}]} />

            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.2 Seleccione una condición que describa su etapa actual en un programa que apoye la conservación del agua" select={["No existe un programa establecido para conservar el agua (0%)",
                "El programa se encuentra en preparación (0-10%)",
                "El programa ya está implementado pero se encuentra  en etapa inicial (11-25%)",
                "El programa ya tiene capacidad de conservar agua en porcentajes (26-50%)",
                "El programa ya tiene capacidad de conservar porcentajes 50% >",
                ]}/>
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{ question:'a_4_1_2', evidence:true, type: 0 }, { question:'a_4_1_2', evidence:true, type: 0 }, { question:'a_4_1_2', evidence:true, type: 0 }]} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.1.3 ¿Con cuantos sistemas de conservación de agua cuenta?"
                elements={[{type:2, question:'a_4_1_3'}]} />
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{ question:'a_4_1_3', evidence:true }, { question:'a_4_1_3', evidence:true }, { question:'a_4_1_3', evidence:true}]} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" className="column-3" padding="30px">
                <ModuleInput title="4.1.4 ¿Qué medidas de conservación del agua implementan en su entidad?" 
                checkbox={{data: [
                    "Grifos con sensor.",
                    "Grifos ahorradores.",
                    "Mingitorios y baños secos.",
                    "Inodoros con doble descarga.",
                    "Supervisión y mantenimiento constante de inodoros.",
                    "Sistemas de riego en horarios adecuados.",
                    "Sistemas de riego automatizados.",
                    "Sistemas de riego por aspersión.",
                    "Limpieza periódica de aljibes y cisternas.",
                    "Abastecimiento de agua potable a la comunidad para el rellenado de termos.",
                    "Medición de los flujos del agua empleada en su entidad.",
                    "Actividades y proyectos escolares que promueven el cuidado del agua.",
                    "Foros de investigación en promoción al cuidado del agua.",
                    "Participación en redes de colaboración para el cuidado del agua.",
                    "Separación de aguas grises.",
                    "Aprovechamiento de aguas grises.",
                    "Colectores pluviales.",
                    "Mantenimiento de áreas verdes asegurando áreas de recarga.",
                    "Otros (especifíque)."
                    ]}} questionCheckBox={'a_4_1_4'}/>
                <ModuleInput
                elements={[{holder: "Especifique", type:1, question:'a_4_1_4_1'}]} />
            </Stack>
            <Stack direction="column-3">
                 <ModuleInput elements={[{ question:'a_4_1_4_1', evidence:true }, { question:'a_4_1_4_1', evidence:true }, { question:'a_4_1_4_1', evidence:true }]} />
            </Stack>

            <h1 className="green"> 4.2 Programa de reciclaje de agua.</h1>
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.2.1 Favor de indicar si cuenta con programa de reciclaje del agua" elements={[{dicotomic:true, span:true, questionDicotomic:'a_4_2_1'}]} />
            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.2.2 ¿Cuenta su entidad con un método de tratamiento de aguas residuales?" elements={[{dicotomic:true, span:true, questionDicotomic:'a_4_2_2_1'}]} />
                <ModuleInput select={[
                "Tratamiento Preliminar: consiste en cribado para eliminar sólidos grandes, eliminación de arena para eliminar arena y otros materiales pesados, y eliminación de aceites y grasas.",
                "Tratamiento Primario: incluye sedimentación y coagulación-floculación",
                "Tratamiento Secundario: sistemas de crecimiento adjunto o sistemas de crecimiento suspendido",
                "Tratamiento Terciario: ofrece opciones de reutilización como desinfección, filtración y oxidación avanzada para purificar aún más el agua para su reutilización en procesos industriales o riego.",
                ]} questionSelect="a_4_2_2_2"/>
                 <Stack direction="column-3">
                     <ModuleInput elements={[{ question:'a_4_2_2_2', evidence:true }, { question:'a_4_2_2_2', evidence:true }, { question:'a_4_2_2_2', evidence:true }]} />
                 </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.2.3 Seleccione una condición que describa su etapa actual en un programa que apoye al reciclaje del agua" select={[
                "No existe un programa establecido para reciclar el agua (0%)",
                "El programa se encuentra en preparación (1-10%)",
                "El programa ya está implementado pero se encuentra  en etapa inicial (11-25%)",
                "El programa ya tiene capacidad de reciclar agua en porcentajes (25-50%) ",
                "El programa ya tiene capacidad de reciclar porcentajes 50% >",
                ]} questionSelect="a_4_2_3"/>
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{ question:'a_4_2_3', evidence:true, type: 0 }, { question:'a_4_2_3', evidence:true, type: 0 }, { question:'a_4_2_3', evidence:true, type: 0 }]} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="4.2.4 ¿Con cuantas acciones de reciclaje de agua cuenta?"
                elements={[{type:2, question:'a_4_2_4'}]} />
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{ question:'a_4_2_4', evidence:true }, { question:'a_4_2_4', evidence:true }, { question:'a_4_2_4', evidence:true }]} />
                </Stack>
            </Stack>

            <h1 className="green"> 4.3 Control de la contaminación del agua en su entidad.</h1>
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput select={[
                "Los programas de control de la contaminación del agua no son considerados. (0%)",
                "Los programas de control de la contaminación del agua están en etapa de diseño. (1-10%)",
                "Los programas de control de la contaminación del agua están en etapa de construcción. (0-30%)",
                "Los programas de control de la contaminación del agua están en la etapa inicial de implementación. (31-50%) ",
                "Los programas de control de la contaminación del agua se implementan por completo y se supervisan ocasionalmente. (51-80%)",
                "Los programas de control de la contaminación del agua se implementan en su totalidad y se supervisan con regularidad. (81-100%)"
                ]} questionSelect="a_4_3"/>
                 <Stack spacing="30px" direction="column-3">
                    <ModuleInput elements={[{ question: 'a_4_3_1', evidence:true, type: 0 }, { question: 'a_4_3_2', evidence:true, type: 0 }, { question: 'a_4_3_3', evidence:true, type: 0 }]} />
                </Stack>
            </Stack>
            
            <CustomTextArea title="4.4 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. Te lo agradecemos)" />
        </VStack>
    );

}