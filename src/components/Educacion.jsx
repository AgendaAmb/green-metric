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
import { useEffect, useState, useContext } from 'react';
import { FormContext } from "../app/providers";


export default function Educacion() {

    const [year, setYear] = useState(2013);
    const [forum, setForum] = useState(2);
    const [track, setTrack] = useState(2);
    const [fair, setFair] = useState(2);
    const [talk, setTalk] = useState(2);
    const [seminary, setSeminary] = useState(2);
    const [conference, setConference] = useState(2);
    const [event, setEvent] = useState(2);
    const [program, setProgram] = useState(2);
    const [proyect, setProyect] = useState(2);
    const [subject, setSubject] = useState(2);
    const [eventName, setEventName] = useState(1);

    const [components, setComponents] = useState([]);
    const [components2, setComponents2] = useState([]);
    const [components3, setComponents3] = useState([]);
    const [components4, setComponents4] = useState([]);
    const [components5, setComponents5] = useState([]);
    const [components6, setComponents6] = useState([]);
    const [components7, setComponents7] = useState([]);
    const [components8, setComponents8] = useState([]);
    const [components9, setComponents9] = useState([]);
    const [components10, setComponents10] = useState([]);
    const [components11, setComponents11] = useState([]);

    const context = useContext(FormContext);


    const item = () => {
        const newMod = [...components, { text: 'Nombre del foro', type: 1, question: `a_6_3_1_${forum}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_${forum + 1}_2` }, { evidence: true, question: `a_6_3_1_${forum}_1` }];
        setComponents([...newMod]);
        setForum(forum + 1);
    }

    const item2 = () => {
        const newMod2 = [...components2, { text: 'Nombre de la rodada', type: 1, question: `a_6_3_1_2_${track}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_2_${track + 1}_2` }, { evidence: true, question: `a_6_3_1_2_${track}_1` }];
        setComponents2([...newMod2]);
        setTrack(track + 1);
    }

    const item3 = () => {
        const newMod3 = [...components3, { text: 'Nombre de la feria', type: 1, question: `a_6_3_1_3_${fair}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_3_${fair + 1}_2` }, { evidence: true, question: `a_6_3_1_3_${fair}_1` }];
        setComponents3([...newMod3]);
        setFair(fair + 1);
    }

    const item4 = () => {
        const newMod4 = [...components4, { text: 'Nombre de la charla', type: 1, question: `a_6_3_1_4_${talk + 1}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_4_${talk + 1}_2` }, { evidence: true, question: `a_6_3_1_4_${talk + 1}_1` }];
        setComponents4([...newMod4]);
        setTalk(talk + 1);
    }
    const item5 = () => {
        const newMod5 = [...components5, { text: 'Nombre del seminario', type: 1, question: `a_6_3_1_5_${seminary + 1}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_5_${seminary + 1}_2` }, { evidence: true, question: `a_6_3_1_5_${seminary + 1}_1` }];
        setComponents5([...newMod5]);
        setSeminary(seminary + 1)
    }


    const item6 = () => {
        const newMod6 = [...components6, { text: 'Nombre de la conferencia', type: 1, question: `a_6_3_1_6_${conference + 1}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_6_${conference + 1}_2` }, { evidence: true, question: `a_6_3_1_6_${conference + 1}_1` }];
        setComponents6([...newMod6]);
        setConference(conference + 1);
    }

    const item7 = () => {
        const newMod7 = [...components7, { text: 'Evento', type: 1, question: `a_6_3_1_7_${event + 1}_1` }, { text: "Asistentes", type: 1, question: `a_6_3_1_7_${event + 1}_2` }, { evidence: true, question: `a_6_3_1_7_${event + 1}_1` }];
        setComponents7([...newMod7]);
        setEvent(event + 1);
    }

    const item8 = () => {
        const newMod8 = [...components8, { text: 'Número de programas', type: 2, question: `a_6_5_1_${program + 1}_1` }, { evidence: true, question: `a_6_5_1_${program + 1}_1` }];
        setComponents8([...newMod8]);
        setProgram(program + 1);
    }

    const item9 = () => {
        const newMod9 = [...components9, { text: 'Nombre del proyecto', type: 1, question: `a_6_5_3_${proyect + 1}_1` }, { text: 'Cantidad destinada ($)', type: 6, question: `a_6_5_3_${proyect + 1}_2` }, { text: 'Fuente de recurso', type: 1, question: `a_6_5_3_${proyect + 2}_3` }, { evidence: true, question: `a_6_5_3_${proyect + 1}_1` }];
        setComponents9([...newMod9]);
        setProyect(proyect + 1);
    }
    const item10 = () => {
        const newMod10 = [...components10, { text: 'Nombre del curso o asignatura', type: 1, question: `a_6_1_2_${subject + 1}_1` }, { text: 'Nombre del programa educativo', type: 1, question: `a_6_1_2_${subject + 1}_2` }];
        setComponents10([...newMod10]);
        setSubject(subject + 1);
    }
    const item11 = () => {
        const newMod11 = [...components11, { text: 'Nombre del evento', type: 1, question: `a_6_2_${eventName + 1}_1_1` }, { text: 'Responsable', type: 1, question: `a_6_2_1_${eventName + 1}_2` }, { evidence: true, maxPhotos: 3, question: `a_6_2_${eventName + 1}_1_1` }];
        setComponents11([...newMod11]);
        setEventName(eventName + 1);
    }

    const popModule = (componentnumber) => {
        switch (componentnumber) {
            case 1:
                if (components.length > 1) {
                    const updatedComps = components.filter((_, index) => index > 2);
                    setComponents(updatedComps);
                    setForum(forum - 1);
                }
                break;
            case 2:
                if (components2.length > 1) {
                    const updatedComps = components2.filter((_, index) => index > 2);
                    setComponents2(updatedComps);
                    setTrack(track - 1);
                }
                break;
            case 3:
                if (components3.length > 1) {
                    const updatedComps = components3.filter((_, index) => index > 2);
                    setComponents3(updatedComps);
                    setFair(fair - 1);
                }
                break;
            case 4:
                if (components4.length > 1) {
                    const updatedComps = components4.filter((_, index) => index > 2);
                    setComponents4(updatedComps);
                    setTalk(talk - 1);
                }
                break;
            case 5:
                if (components5.length > 1) {
                    const updatedComps = components5.filter((_, index) => index > 2);
                    setComponents5(updatedComps);
                    setSeminary(seminary - 1);
                }
                break;
            case 6:
                if (components6.length > 1) {
                    const updatedComps = components6.filter((_, index) => index > 2);
                    setComponents6(updatedComps);
                }
                break;
            case 7:
                if (components7.length > 1) {
                    const updatedComps = components7.filter((_, index) => index > 2);
                    setComponents7(updatedComps);
                    setConference(conference - 1);
                }
                break;
            case 8:
                if (components8.length > 0) {
                    const updatedComps = components8.slice(0, components8.length - 1);
                    setComponents8([...updatedComps]);
                    setProgram(program - 1);
                    console.log("Eliminado");
                }
            case 9:
                if (components9.length > 1) {
                    const updatedComps = components9.filter((_, index) => index > 3);
                    setComponents9(updatedComps);
                    setProyect(proyect - 1);
                }
                break;
            case 10:
                if (components10.length >= 2) {
                    const updatedComps = components10.slice(0, components10.length - 2);
                    setComponents10([...updatedComps]);
                    setSubject(subject - 1);
                }
                break;

            case 11:
                if (components11.length > 1) {
                    const updatedComps = components11.filter((_, index) => index > 2);
                    setComponents11(updatedComps);
                    setEventName(eventName - 1);
                    console.log("eliminado");
                }
                break;


        };
    }

    useEffect(() => {
        setYear(new Date().getFullYear());

        const { values: answers } = context;

        if (answers) {
            const regex_1 = /^a_6_3_1_(?!1|2|0)(?:._1|._2)$/;
            let checkItem = Object.keys(answers).filter((el) => regex_1.test(el)).length;
            console.log(checkItem);
            for (let i = 0; i < checkItem; i++) {
                item();
                checkItem = 0;
            }
            const regex_2 = /^a_6_3_1_2_(?!1|2|0)(?:._1|._2)$/;


            checkItem = Object.keys(answers).filter((el) => regex_2.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item2();
                checkItem = 0;
            }

            const regex_3 = /^a_6_3_1_3_(?!1|2|0)(?:._1|._2)$/;


            checkItem = Object.keys(answers).filter((el) => regex_3.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item3();
                checkItem = 0;
            }

            const regex_4 = /^a_6_3_1_4_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_4.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item4();
                checkItem = 0;
            }

            const regex_5 = /^a_6_3_1_5_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_5.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item5();
                checkItem = 0;
            }

            const regex_6 = /^a_6_3_1_6_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_6.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item6();
                checkItem = 0;
            }

            const regex_7 = /^a_6_3_1_7_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_7.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item7();
                checkItem = 0;
            }

            const regex_8 = /^a_6_5_1_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_8.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item8();
                checkItem = 0;
            }

            const regex_9 = /^a_6_5_3_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_9.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item9();
                checkItem = 0;
            }

            const regex_10 = /^a_6_1_2_(?!1|2|0)(?:._1|._2)$/;

            checkItem = Object.keys(answers).filter((el) => regex_10.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item10();
                checkItem = 0;
            }

            const regex_11 = /^a_6_2_(?!1|0)(?:._1)$/;

            checkItem = Object.keys(answers).filter((el) => regex_11.test(el)).length;

            for (let i = 0; i < checkItem; i++) {
                item11();
                checkItem = 0;
            }
        }
    }, [year]);


    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1 className="blue">Educación</h1>
            <Text className="blue text-start expand-3">En este apartado se busca recopilar la información de todos los esfuerzos que se realizaron en crear y apoyar la preocupación de las nuevas generaciones por los temas de sostentabilidad y cuidado del medio ambiente desde el enfoque de los talentos y aptitudes que cada uno de los miembros de nuestra comunidad posee.</Text>
            <Stack spacing="30px" w="100%" padding="30px" position={"relative"}>
                <h2 className="green">6.1 Cursos y asignaturas</h2>
                <ModuleInput title="6.1.1 Números de cursos/asignaturas totales, contenidos en el plan curricular de cada programa educativo que ofrece la entidad."
                    elements={[{ type: 2, question: 'a_6_1_1' }]} />
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item10}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(10)}>-</Button>
                </Stack>
                <ModuleInput title="6.1.2 Indicar el número de cursos/asignaturas relacionado con la sostenibilidad."
                    elements={[{ text: 'Número de cursos y asignaturas', type: 2, question: 'a_6_1_2_1_1' }, { text: 'Nombre del curso o asignatura', type: 1, question: 'a_6_1_2_1_2' }, { text: 'Nombre del programa educativo', type: 1, question: 'a_6_1_2_1_3' }]} />
                <ModuleInput elements={components10} />
                <ModuleInput title="6.1.3 Número de alumnos que tomaron materias ambientales y sostenibilidad."
                    elements={[{ type: 2, question: 'a_6_1_3' }]} />
            </Stack>

            <Stack spacing="30px" className="column-3" position={"relative"}>
                <h2 className="green">6.2 Número de eventos relacionados con la sostenibilidad.</h2>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item11}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(11)}>-</Button>
                </Stack>
                <ModuleInput title="6.2.1 Indicar el número de cursos/aginaturas relacionado con la sostenibilidad."
                    elements={[{ text: 'Nombre del evento', type: 1, question: 'a_6_2_1_1_1' }, { text: 'Responsable', type: 1, question: 'a_6_2_1_1_2' }, { evidence: true, maxPhotos: 3, question: 'a_6_2_1_1_1' }]} />
                <ModuleInput elements={components11} />
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <h2 className="green">6.3 Actividades extracurriculares</h2>
                <h3 className="blue">6.3.1.1 Foros</h3>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(1)}>-</Button>
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1, question: 'a_6_3_1_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_1_2' }, { evidence: true, question: 'a_6_3_1_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1, question: 'a_6_3_1_1_3' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_1_4' }, { evidence: true, question: 'a_6_3_1_1_4' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components} />
                </Stack>
                <h3 className="blue">6.3.1.2 Rodadas</h3>
                <Button className="add-button" onClick={item2} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(2)} gridColumn={3}>-</Button>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1, question: 'a_6_3_1_2_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_2_1_2' }, { evidence: true, question: 'a_6_3_1_2_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1, question: 'a_6_3_1_2_2_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_2_2_2' }, { evidence: true, question: 'a_6_3_1_2_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components2} />
                </Stack>
                <Button className="add-button" onClick={item3} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(3)} gridColumn={3}>-</Button>
                <h3 className="blue">6.3.1.3 Ferias (cualquier tipo)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la feria', type: 1, question: 'a_6_3_1_3_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_3_1_2' }, { evidence: true, question: 'a_6_3_1_3_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la feria', type: 1, question: 'a_6_3_1_3_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_3_2_2' }, { evidence: true, question: 'a_6_3_1_3_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" >
                    <ModuleInput elements={components3} />
                </Stack>

                <Button className="add-button" onClick={item4} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(4)} gridColumn={3}>-</Button>
                <h3 className="blue">6.3.1.4 Charlas</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1, question: 'a_6_3_1_4_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_4_1_2' }, { evidence: true, question: 'a_6_3_1_4_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1, question: 'a_6_3_1_4_2_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_4_2_2' }, { evidence: true, question: 'a_6_3_1_4_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components4} />
                </Stack>

                <Button className="add-button" onClick={item5} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(5)} gridColumn={3}>-</Button>
                <h3 className="blue">6.3.1.5 Seminarios</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1, question: 'a_6_3_1_5_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_5_1_2' }, { evidence: true, question: 'a_6_3_1_5_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1, question: 'a_6_3_1_5_2_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_5_2_2' }, { evidence: true, question: 'a_6_3_1_5_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" >
                    <ModuleInput elements={components5} />
                </Stack>

                <Button className="add-button" onClick={item6} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(6)} gridColumn={3}>-</Button>
                <h3 className="blue">6.3.1.6 Conferencias</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question: 'a_6_3_1_6_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_6_1_2' }, { evidence: true, question: 'a_6_3_1_6_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1, question: 'a_6_3_1_6_2_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_6_2_2' }, { evidence: true, question: 'a_6_3_1_6_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components6} />
                </Stack>
                <Button className="add-button" onClick={item7} justifySelf={"self-end"} gridColumn={3}>+</Button>
                <Button className="delete-button" justifySelf={"self-end"} onClick={() => popModule(7)} gridColumn={3}>-</Button>
                <h3 className="blue">6.3.1.7 Eventos culturales (festivales, teatro, evento musical, exhibiciones artísticas,etc.)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Evento', type: 1, question: 'a_6_3_1_7_1_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_7_1_2' }, { evidence: true, question: 'a_6_3_1_7_1_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Evento', type: 1, question: 'a_6_3_1_7_2_1' }, { text: "Asistentes", type: 1, question: 'a_6_3_1_7_2_2' }, { evidence: true, question: 'a_6_3_1_7_2_2' }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={components7} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
                <h2 className="green">6.4 Publicaciones académicas sobre sostenibilidad.</h2>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question: 'a_6_4_1_1_1' }, { text: 'Autor(es)', type: 1, question: 'a_6_4_1_1_2' }, { text: 'Sitio de publicación', type: 1, question: 'a_6_4_1_1_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question: 'a_6_4_1_2_1' }, { text: 'Autor(es)', type: 1, question: 'a_6_4_1_2_2' }, { text: 'Sitio de publicación', type: 1, question: 'a_6_4_1_2_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{ text: 'Nombre de la publicación', type: 1, question: 'a_6_4_1_3_1' }, { text: 'Autor(es)', type: 1, question: 'a_6_4_1_3_2' }, { text: 'Sitio de publicación', type: 1, question: 'a_6_4_1_3_4' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question: 'a_6_4_2_1' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question: 'a_6_4_2_2' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{ type: 2, question: 'a_6_4_2_3' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question: 'a_6_4_3_1_1' }, { text: ' Objetivo de agrupacion', type: 1, question: 'a_6_4_3_1_2' }, { text: 'Integrantes', type: 2, question: 'a_6_4_3_1_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question: 'a_6_4_3_2_1' }, { text: ' Objetivo de agrupacion', type: 1, question: 'a_6_4_3_2_2' }, { text: 'Integrantes', type: 2, question: 'a_6_4_3_2_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                        elements={[{ text: 'Nombre de agrupación', type: 1, question: 'a_6_4_3_3_1' }, { text: ' Objetivo de agrupacion', type: 1, question: 'a_6_4_3_3_2' }, { text: 'Integrantes', type: 2, question: 'a_6_4_3_3_3' }]} />
                </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3" position={"relative"}>
                <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                    <Button className="add-button" onClick={item8}>+</Button>
                    <Button className="delete-button" onClick={() => popModule(8)}>-</Button>
                </Stack>
                <h2 className="green">6.5 Investigación relacionada a la sostenibilidad.</h2>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{ text: 'Número de programas', type: 2, question: 'a_6_5_1_1_1' }, { evidence: true, question: 'a_6_5_1_1_1' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{ text: 'Número de programas', type: 2, question: 'a_6_5_1_2_1' }, { evidence: true, question: 'a_6_5_1_2_1' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales" elements={components8} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2020', type: 2, question: 'a_6_5_2_1' }, { evidence: true, question: 'a_6_5_2_1' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2021', type: 2, question: 'a_6_5_2_2' }, { evidence: true, question: 'a_6_5_2_2' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{ helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.' }, { text: '2022', type: 2, question: 'a_6_5_2_3' }, { evidence: true, question: 'a_6_5_2_3' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{ text: 'Nombre del proyecto', type: 1, question: 'a_6_5_3_1_1' }, { text: 'Cantidad destinada ($)', type: 6, question: 'a_6_5_3_1_2' }, { text: 'Fuente de recurso', type: 1, question: 'a_6_5_3_1_2' }, { evidence: true, question: 'a_6_5_3_1_2' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{ text: 'Nombre del proyecto', type: 1, question: 'a_6_5_3_2_1' }, { text: 'Cantidad destinada ($)', type: 6, question: 'a_6_5_3_2_2' }, { text: 'Fuente de recurso', type: 1, question: 'a_6_5_3_2_3' }, { evidence: true, question: 'a_6_5_3_2_3' }]} />
                    <Stack direction={"row"} gap={6} position={"absolute"} right={"20px"}>
                        <Button className="add-button" onClick={item9}>+</Button>
                        <Button className="delete-button" onClick={() => popModule(9)}>-</Button>
                    </Stack>
                </Stack>
                <Stack spacing="30px" marginTop={"78px"}>
                    <ModuleInput elements={components9} />
                </Stack>
                <h3>6.5.4 Indique si en su entidad se realiza investigación relacionada con la sostenibilidad, y de ser así, indicar el nombre del investigador o investigadora, su área de investigación y proyectos de investigación.</h3>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '1. Infraestructura y escenarios', dicotomic: true, questionDicotomic: 'a_6_5_4_1' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_1_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_1_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_1_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '2. Energía y cambio climático', dicotomic: true, questionDicotomic: 'a_6_5_4_2' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_2_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_2_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_2_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '3. Residuos', dicotomic: true, questionDicotomic: 'a_6_5_4_3' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_3_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_3_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_3_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '4. Agua', dicotomic: true, questionDicotomic: 'a_6_5_4_4' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_4_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_4_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_4_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '5. Transporte', dicotomic: true, questionDicotomic: 'a_6_5_4_5' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_5_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_5_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_5_3' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput
                        elements={[{ text: '6. Educación', dicotomic: true, questionDicotomic: 'a_6_5_4_6' }, { text: 'Nombre del investigador', type: 1, question: 'a_6_5_4_6_1' }, { text: 'Área de investigación', type: 1, question: 'a_6_5_4_6_2' }, { text: 'Proyectos de investigación', type: 1, question: 'a_6_5_4_6_3' }]} />
                </Stack>

                <h3>6.5.5 Indica los cuerpos académicos que tienen línea de investigación relacionada con sostenibilidad</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question: 'a_6_5_5_1' }, { text: 'Objetivo', type: 1, question: 'a_6_5_5_2' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question: 'a_6_5_5_3' }, { text: 'Objetivo', type: 1, question: 'a_6_5_5_4' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del grupo', type: 1, question: 'a_6_5_5_5' }, { text: 'Objetivo', type: 1, question: 'a_6_5_5_6' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.6 Número total de estudiantes regulares" elements={[{ type: 2, question: 'a_6_5_6' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.7 Número total de estudiantes que trabajan en línea" elements={[{ type: 2, question: 'a_6_5_7' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.8 Número total de personal académico y administrativo" elements={[{ type: 2, question: 'a_6_5_8' }]} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput title="6.5.9 Número total de grupos estudiantiles, o independientes que fomenten acciones en pro de la sostenibilidad. (clubes, organizaciones no gubernamentales, sindicatos, grupos, etc)" elements={[{ type: 2, question: 'a_6_5_9' }, { evidence: true, question: 'a_6_5_9' }]} />
                </Stack>

                <Stack spacing="30px">
                    <ModuleInput title="6.5.10 Número total de empresas o emprendimientos que han surgido en su entidad con productos o proyectos sostenibles" elements={[{ type: 2, question: 'a_6_5_10' }, { evidence: true, question: 'a_6_5_10' }]} />
                </Stack>
            </Stack>

            <CustomTextArea title="6.6 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. Te lo agradecemos)" name="a_6_6_0" />

        </VStack>
    )
}