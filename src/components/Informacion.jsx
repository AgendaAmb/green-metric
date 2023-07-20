"use client";
import {
    VStack,
    Stack,
    StackDivider,
    Button,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState} from "react";
import DropImage from "./DropImage";
import ModuleInput from "./ModuleInput";


export default function Informacion({ hello }) {
    const options = [
        "Entidades Academicas",
        "Institutos y centros de investigación",
        "Rectoría",
        "Secretarías",
        "Divisiones",
        "Entidades de apoyo y extensión",
        "Entidades de apoyo académico",
        "Servicios al público",
    ];


    const [deps, setDeps] = useState([]);


    const pushModule = () => {
        const newDeps = [...deps, { holder: `Nombre de la dependencia ${deps.length + 1}`, type: 1, question: `a_0_2_${deps.length + 1}` }];

        setDeps([...newDeps]);
    }

    const popModule = () => {
        if (deps.length > 1) {
            const updatedDeps = deps.slice(0, deps.length - 1);
            setDeps(updatedDeps);
        }
    }

    useEffect(() => {
        if (deps.length <= 1) {

            setDeps([{ holder: `Nombre de la dependencia 1`, type: 1, question: `a_0_2_${deps.length + 1}` }])
        }
    }, [])

    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"15px"}
            className="overflow-y"
            padding="30px"
        >
            <h1 className="blue">Información</h1>

            <Stack spacing="5px" w="30%" padding="30px">
                <ModuleInput title={"Datos de la dependencia"}
                    elements={[{ holder: "Nombre de la dependencia", type: 1, customName: "dependency", question: 'a_0_1_1' }, { holder: "Dirección de la dependencia", type: 1, question: 'a_0_1_2' }, { holder: "Responsable de la dependencia (Director(a))", type: 1, question: '0_1_3' }, { holder: "Nombre del responsable de Green Metric", type: 1, question: 'a_0_1_4' }]}
                    inputName={'inputField'} />
            </Stack>
            <Stack spacing="30px" w="100%">
                <Stack width="100%" gridTemplateColumns={"1fr 0.2fr"} position={"relative"} alignSelf={"center"}>
                    <h3>Departamentos y dependencias a reportar</h3>
                    <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                        <Button className="add-button" onClick={pushModule}>+</Button>
                        <Button className="delete-button" onClick={popModule}>-</Button>
                    </Stack>
                </Stack>
                <Stack direction={"column"} className="expand-3 column-3" gridAutoFlow={"row"} w={"100%"}>
                    <ModuleInput elements={deps} />
                </Stack>

                <Stack>
                    {/* Agregar <ModuleInput title={"\0"} elements={[{ holder: "Nombre de la dependencia", type: 1 }, { holder: "Direccion de la dependencia", type: 1 }]} /> */}
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <ModuleInput title="Favor de indicar el nombre completo del responsable de cada sección" checkbox={{
                    data: ["1. Infraestructura y escenarios.",
                        "2. Energía y cambio climático",
                        "3. Residuos",
                        "4. Agua",
                        "5. Transporte",
                        "6. Educación",
                    ], hasInput: true
                }} checkboxName={'CheckBoxField'} questionCheckBox={'a_0_3_1'} />
            </Stack>

            <Stack spacing="30px" w="100%" className="column-2" padding="30px">
                <h3 className="expand-3">Indique el tipo de dependencia universitaria</h3>
                <ModuleInput select={options} questionSelect={'a_0_4_1'} />
                <ModuleInput elements={[{ text: "¿Cuántas personas asisten a su entidad en promedio diariamente?", type: 2, question: 'a_0_4_2' }]} />
            </Stack>



            <VStack spacing="10px" w="100%">
                <h3>Fotografías</h3>
                <Text className="self-start">Anexar fotografías de su entidad de trabajo.</Text>
                <Stack w="100%" direction={"row"} divider={<StackDivider borderColor="gray.200" />}>
                    <DropImage title={"Instalaciones interiores"} maxPhotos={4} />
                    <DropImage title={"Fachadas"} maxPhotos={4} />
                    <Stack className="grid-center">

                        <DropImage title={"Planos"} maxPhotos={4} pdf={true} sub="Dentro de lo posible, agregar fotos de planos de área y/o construcción de su entidad." />
                    </Stack>
                </Stack>
            </VStack>
            <Button type="submit">Subir</Button>
        </VStack>
    );
}
