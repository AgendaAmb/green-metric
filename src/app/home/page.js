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

import { useEffect, useState } from 'react';
import { Box, Image } from "@chakra-ui/react"

export default function Home() {
    return (
        <VStack
        w="100%"
        padding="30px"
        spacing="30px"
        className="overflow-y"
      >
        <h1>Bienvenido/a</h1>
        <h3>Por cuarta ocasión la UASLP participa en el UI GreenMetric World University Ranking, el cual es un indicador que permite medir el compromiso de las instituciones educativas a nivel superior, para atender asuntos relevantes en materia de protección ambiental y sustentabilidad.</h3>
  
        <h3>Más allá de la evaluación global que este Ranking nos permite obtener como universidad, se ha considerado aprovechar la importante información recopilada para evaluar el desempeño de cada entidad académica en materia ambiental. Asimismo, se aprovechará esta información para generar los informes de sustentabilidad de cada entidad, con el fin de hacer visibles las acciones y estrategias que cada una realiza. Lo anterior tiene como objetivo poder detectar áreas de oportunidad y compartir buenas prácticas que ayuden a mejorar el desempeño de todas las entidades.</h3>
  
        <h3>Con esto se busca que la responsabilidad de la UASLP sea efectivamente, un ejemplo tangible para nuestros estudiantes y para la sociedad en general.</h3>
  
        <h3>Todos los miembros de la comisión ambiental tendrán acceso al formulario, motivo por el cual deberán ser cuidadosos con la información que ha sido capturada por sus compañeros, debido a que se trata de una sesión compartida por entidad. Algunas preguntas requieren respuestas alfanuméricas, otras respuestas numéricas y también se hace la solicitud de evidencia en formato PDF o fotografías (.png).</h3>
  
        <h3>Buscamos que este proceso involucre seguimiento y retroalimentación, motivo por el cual se integró la comisión ambiental, la cual recibirá acompañamiento en todo momento por parte de Agenda Ambiental.</h3>
  
        <h3>Para poder tener un alcance más amplio en este objetivo, se habilitó el correo <a href="mailto:greenmetric@uaslp.mx">greenmetric@uaslp.mx</a> y se creó el grupo <a href="http://a.uaslp.mx/GreenMetric">Reporte de Sustentabilidad UASLP GREEN METRIC</a> en Microsoft Teams para anuncios, exposición de dudas en el canal general, distribución de información relevante, programación de sesiones grupales o individuales, entre otros usos que puede dársele a estas herramientas. Además, al final de cada sección de este formulario, se habilitó un apartado destinado a comentarios para complementar estas acciones.</h3>
  
        <h3>Agradecemos su participación y quedamos atentos ante sus dudas, inquietudes y cualquier comentario que nos lleve hasta la construcción de una herramienta más eficiente que oriente a nuestra institución hacia un desarrollo más sostenible.</h3>
  
        <h3>Las respuestas deben ser íntegras y cabales. Estamos bajo un proceso de mejora continua, por lo que ninguna respuesta es errónea, ya que nos permitirá detectar nuestras fortalezas y las áreas de oportunidad en las cuales podemos fortalecer a nuestra entidad.</h3>
  
        <h3>Sin más, comencemos con la experiencia de trabajo en equipo, conocimiento, investigación y reflexión.</h3>
  
        <h3>Comité Organizador del Ranking de Sustentabilidad UASLP GM2023<br />Agenda Ambiental</h3>
      </VStack>
    );
  
}
