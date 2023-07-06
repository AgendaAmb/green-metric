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
} from "@chakra-ui/react";


import ModuleInput from "./ModuleInput";

export default function Educacion() {
    return (
        <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        padding="30px"
        spacing={"30px"}
        >
            <h1 className="blue">Educación</h1>
            <Stack spacing="30px" w="100%" padding="30px" direction="column">
                <h2 className="green">6.1 Cursos y asignaturas</h2>
                <ModuleInput title="6.1.1 Números de cursos/asignaturas totales, contenidos en el plan curricular de cada programa educativo que ofrece la entidad."
                    elements={[{type:2}]} /> 
                <ModuleInput title="6.1.2 Indicar el número de cursos/aginaturas relacionado con la sostenibilidad."
                    elements={[{text:'Número de cursos y asignaturas',type:2}, {text:'Nombre del curso o asignatura',type:1}, {text:'Nombre del programa educativo',type:1}]}/>
                <ModuleInput elements={[{disabled: true, type: -1, text:"Total: ", holder: "Total"}, ]} />
                <ModuleInput title="6.1.3 Número de alumnos que tomaron materias ambientales y sostenibilidad."
                    elements={[{type:2}]} /> 
            </Stack>

            <Stack spacing="30px" className="column-3">
                <h2 className="green">6.2 Número de eventos relacionados con la sostenibilidad.</h2>
                <ModuleInput title="6.1.2 Indicar el número de cursos/aginaturas relacionado con la sostenibilidad."
                    elements={[{text:'Nombre del evento',type:2}, {text:'Responsable',type:1}, {evidence:true, maxPhotos:3}]}/>
                <ModuleInput
                    elements={[{text:'Nombre del evento',type:2}, {text:'Responsable',type:1}, {evidence:true, maxPhotos:3}]}/>
                <ModuleInput
                    elements={[{text:'Nombre del evento',type:2}, {text:'Responsable',type:1}, {evidence:true, maxPhotos:3}]}/>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
              <h2 className="green">6.3 Actividades extracurriculares</h2>
              <h3 className="blue">6.3.1.1 Foros</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del foro', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                <h3 className="blue">6.3.1.2 Rodadas</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la rodada', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                <h3 className="blue">6.3.1.3 Ferias (cualquier tipo)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la feria', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del feria', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                 
                <h3 className="blue">6.3.1.4 Charlas</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la charla', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                 
                <h3 className="blue">6.3.1.5 Seminarios</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre del seminario', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                 
                <h3 className="blue">6.3.1.6 Conferencias</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

                <h3 className="blue">6.3.1.7 Eventos culturales (festivales, teatro, evento musical, exhibiciones artísticas,etc.)</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: 'Nombre de la conferencia', type: 1 }, { text: "Asistentes", type: 1 }, { evidence: true }]} inputLarge={true} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>
            </Stack>

            <Stack spacing="30px" w="100%" padding="30px"  className="column-3">
                <h2 className="green">6.4 Publicaciones académicas sobre sostenibilidad.</h2>
                    <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{text:'Nombre de la publicación',type:1}, {text:'Autor(es)',type:1}, {text:'Sitio de publicación',type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{text:'Nombre de la publicación',type:1}, {text:'Autor(es)',type:1}, {text:'Sitio de publicación',type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput title="6.4.1 Indica el nombre de la publicación, autor (es) y lugar donde se publicó."
                        elements={[{text:'Nombre de la publicación',type:1}, {text:'Autor(es)',type:1}, {text:'Sitio de publicación',type:1}]}/>
                    </Stack>

                    <Stack spacing="30px">
                        <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.4.2 Indica el número de tesis generadas sobre temas relacionados con la sostenibilidad."
                        elements={[{type:2}]}/>
                    </Stack>

                    <Stack spacing="30px">
                        <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                         elements={[{text:'Nombre de agrupación',type:1}, {text:' Objetivo de agrupacion',type:1}, {text:'Integrantes',type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                         elements={[{text:'Nombre de agrupación',type:1}, {text:' Objetivo de agrupacion',type:1}, {text:'Integrantes',type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.4.3 Indica las agrupaciones que persiguen un objetivo relacionado con la sostenibilidad."
                         elements={[{text:'Nombre de agrupación',type:1}, {text:' Objetivo de agrupacion',type:1}, {text:'Integrantes',type:2}]}/>
                    </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" padding="30px"  className="column-3">
                <h2 className="green">6.5 Investigación relacionada a la sostenibilidad.</h2>
                    <Stack spacing="30px">
                        <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{text:'Número de programas',type:2}, {evidence:true}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.5.1 Número de programas relacionados con la sostenibilidad de su entidad con colaboraciones internacionales"
                        elements={[{text:'Número de programas',type:2}, {evidence:true}]}/>
                    </Stack>
                    <Stack spacing="30px" className="grid-3-rows">
                        <ModuleInput add={true} />
                    </Stack>

                    <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.'},{text:'2020',type:2}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.'},{text:'2021',type:2}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px">
                    <ModuleInput title="6.5.2 Fondos de investigación totales de los últimos 3 años."
                        elements={[{helper: 'Esta información se utilizará para calcular el porcentaje de financiación de la investigación sobre el medio ambiente y la sostenibilidad con respecto a la financiación total de la investigación.'},{text:'2022',type:2}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{text:'Nombre del proyecto',type:1}, {text:'Cantidad destinada ($)',type:6}, {text:'Fuente de recurso',type:1}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px">
                    <ModuleInput title="6.5.3 Cantidad monetaria destinada a proyectos relacionados con la sostenibilidad en los últimos 3 años"
                        elements={[{text:'Nombre del proyecto',type:1}, {text:'Cantidad destinada ($)',type:6}, {text:'Fuente de recurso',type:1}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px" className="grid-3-rows">
                        <ModuleInput add={true} />
                    </Stack>
                    
                    <h3>6.5.4 Indique si en su entidad se realiza investigación relacionada con la sostenibilidad, y de ser así, indicar el nombre del investigador o investigadora, su área de investigación y proyectos de investigación.</h3>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'1. Infraestructura y escenarios',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'2. Energía y cambio climático',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'3. Residuos',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'4. Agua',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'5. Transporte',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                    <ModuleInput
                        elements={[{text:'6. Educación',dicotomic:true},{text:'Nombre del investigado', type:1},{text:'Área de investigación', type:1},{text:'Proyectos de investigación', type:1}]}/>
                    </Stack>

                    <h3>6.5.5 Indica los cuerpos académicos que tienen línea de investigación relacionada con sostenibilidad</h3>
                    <Stack spacing="30px">
                        <ModuleInput elements={[{text:'Nombre del grupo', type:1}, {text:'Objetivo', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput elements={[{text:'Nombre del grupo', type:1}, {text:'Objetivo', type:1}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput elements={[{text:'Nombre del grupo', type:1}, {text:'Objetivo', type:1}]}/>
                    </Stack>

                    <Stack spacing="30px">
                        <ModuleInput title="6.5.6 Número total de estudiantes regulares" elements={[{type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.5.7 Número total de estudiantes que trabajan en línea" elements={[{type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.5.8 Número total de personal académico y administrativo" elements={[{type:2}]}/>
                    </Stack>
                    <Stack spacing="30px">
                        <ModuleInput title="6.5.9 Número total de grupos estudiantiles, o independientes que fomenten acciones en pro de la sostenibilidad. (clubes, organizaciones no gubernamentales, sindicatos, grupos, etc)" elements={[{type:2}, {evidence:true}]}/>
                    </Stack>

                    <Stack spacing="30px">
                        <ModuleInput title="6.5.10 Número total de empresas o emprendimientos que han surgido en su entidad con productos o proyectos sostenibles" elements={[{type:2}, {evidence:true}]}/>
                    </Stack>
            </Stack>
            <Stack spacing="30px" w="100%" align="center" direction="column">
                <ModuleInput title="6.6 Añade un comentario sobre el criterio que evaluaste en tu entidad. (Comentarios, sugerencias, crítica constructiva, observaciones. te lo agradecemos. "
                elements={[{type:1}]} />
            </Stack>
        </VStack>
    )
}