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
    Button,
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";
import CustomTextArea from "./CustomTextArea";

export default function Transporte() {
    return (
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}>

        <h1 className="blue">Transporte</h1>
        <Text className="blue text-start expand-3">En este apartado se busca recopilar la información relacionada con políticas internas de cada entidad las cuales busquen el fortalecimiento de la movilidad urbana sostenible. Estas van desde establecer límites en cuanto a la cantidad de vehículos motorizados en el campus, el uso de autobuses y bicicletas para fomentar un entorno más saludable y contribuir con la reducción de la huella de carbono.</Text>
        <Stack spacing="30px" w="100%"   padding="30px">
            <h2 className="green">5.1 Número de vehículos oficiales con los que cuenta su entidad</h2>
            <ModuleInput title="5.1.1 Indica el número de vehículos oficiales con los que cuenta su entidad"
                elements={[{type:2, question:'a_5_1_1'}]} /> 
                {/* FALTA AGREGAR SUMA TOTAL*/}
            <ModuleInput title="5.1.2 Indicar el total de autos y clasificarlos en híbridos o a base de combustible." elements={[ 
            {text:'5.1.2.1 Total de autos ingresados', type:2, question:'a_5_1_2_1'}, {text:'5.1.2.2 Autos híbridos', type:2, question:'a_5_1_2_2'}, {text:'5.1.2.3 Vehículos de combustible', type:2, question:'a_5_1_2_3'}]} />
            <ModuleInput title="5.1.3 Indicar el número de motocicletas que ingresan diariamente"
                elements={[{type:2, question:'a_5_1_3'}]} /> 
        </Stack>

        <Stack spacing="30px" w="100%"   padding="30px">
            <h2 className="green">5.2 Número de servicios de transporte destinado a trabajadores y alumnos</h2>
            <ModuleInput elements={[ 
            {text:'5.2.1 Su entidad cuenta con un servicio de transporte de personal o de alumnado', type:2, question:'a_5_2_1'}, {text:'5.2.2 Rutas de transporte público que transitan cerca de su entidad', type:2, question:'a_5_2_2'}, {text:'5.2.3 Número de viajes por día', type:2, question:'a_5_2_3'}, {text:'5.2.4 Personas que hacen uso del transporte publico', type:2, question:'a_5_2_4'}]} />
        </Stack>
        
        <Stack spacing="30px" w="100%"   padding="30px">
            {/* FALTA AGREGAR SUMA TOTAL*/}
            <h2 className="green">5.3 Número de vehículos de cero emisiones que recibe diariamente</h2>
            <ModuleInput elements={[ 
            {text:'5.3.1 Bicicletas', type:2, question:'a_5_3_1'}, {text:'5.3.2 Patinetas', type:2, question:'a_5_3_2'}, {text:'5.3.3 Carros eléctricos', type:2, question:'a_5_3_3'}, {text:'5.3.4 Otros', type:2, question:'a_5_3_4'}]} />
        </Stack>

        <Stack spacing="30px" w="100%"   padding="30px">
        <h2 className="green">5.4 Área total en m2 de estacionamiento en su entidad.</h2>
            <ModuleInput elements={[{type:5, question:'a_5_4'}]} /> 
            <ModuleInput title="5.4.1 Mencionar si cuenta con algún mecanismo de absorción de agua en sus estacionamientos" checkbox={{data: [
            "Adoquín",
            "Asfalto permeable",
            "Grava",
            "Otro",
            "Ninguno"
            ]}} questionCheckBox={'a_5_4_1'}/>
        </Stack>

        <Stack spacing="30px" w="100%" padding="30px" direction="column">
            <h2 className="green">5.5 Iniciativas para disminuir, uso de áreas de estacionamiento, los vehículos privados en el campus.</h2>
            <ModuleInput text= "EJEMPLO: Programa Unibici, programa Autocompartido, becas para la movilidad, otros." elements={[ 
            {type:1, evidence: true, question:'a_5_5_1'}, {type:1, evidence: true, question:'a_5_5_2'}, {type:1, evidence: true, question:'a_5_5_3'}, {type:1, evidence: true, question:'a_5_5_4'}, ]} />
        </Stack>

        <Stack spacing="30px" w="100%" padding="30px" direction="column">
            <h2 className="green">5.6 Número de pasos peatonales y su extensión (m2).</h2>
            <ModuleInput text="Tener en cuenta que sean accesibles, seguros, convenientes y aptos para todos los peatones (muletas, silla de ruedas, débiles visuales, etc)"
            elements={[{type: 2, helper:'Número de pasos peatonales', question:'a_5_6_1'}, {type:5, helper:'Área de extensión', question:'a_5_6_2'}, {evidence:true, question:'a_5_6_2'}]}/>
        </Stack>

        <Stack spacing="30px" w="100%"   padding="30px">
        <h2 className="green">5.7 Área total en m2 de estacionamiento asegurado para transporte multimodal (Infra, recoleccón de residuos, gruas, bomberos, ambulancias, etc).</h2>
            <ModuleInput
                elements={[{type:5, question:'a_5_7'}]} /> 
            </Stack>

            <CustomTextArea title="5.8 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. Te lo agradecemos)" />
            <Button type="submit">Subir</Button>
        </VStack>
    )
}