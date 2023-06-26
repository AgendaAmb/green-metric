import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    InputLeftAddon,
    Icon,

} from "@chakra-ui/react";

import { MdLibraryAdd } from "react-icons/md";

import DropImage from "./DropImage";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";
/*
* * Elementos
* * Tipo 1: Texto
* * Tipo 2: Numérico
* * Tipo 3: Porcentaje
* * Tipo 4: Kilogramos
* * Tipo 5: Metros Cuadrados
*/
export default function ModuleInput({ title, elements, checkbox, area = false, select, add, addTitle = "Añadir otro modulo", column = false, span = false, inputLarge = false, text }) {
    return (
        <>
            {title && <h4 className="expand-2 blue">{title}</h4>}
            {text && <Text className="expand-2 blue">{text}</Text>}
            {elements?.map(({ text, holder, type, evidence, span, half, dicotomic, left, title = "Evidencias ", helper, textTitle = "", maxPhotos = 0}, index) => {
                return (
                    <Stack direction="column" className={`${span ? "expand-2" : ""}`} key={index} >
                        <Stack direction={`${column ? "column" : "row"}`} gridTemplateColumns={`1.3fr 1fr 1fr 1fr`} display={"grid"}>
                            {text && <Text className={inputLarge ? ""  : "expand-2"} >{textTitle} {text}</Text>}
                            {
                                dicotomic ?
                                    <Select gridColumn={"span 2"}>
                                        <option value="-1">Seleccione:</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </Select> :
                                    (type != null) ?

                                        <InputGroup w="100%" className={`${text == null ? "expand-4" : ""} ${inputLarge ? "expand-3" : "expand-2"}`} >
                                            <InputLeftAddon

                                                pointerEvents="none"
                                                color="gray.600"
                                                fontSize="1.2em"
                                                children={`${left ? left : type == 1 ? "abc" : type == 2 ? "123" : type == 3 ? "%" : type == 4 ? "kg" : type == 5 ? "m2" : type == 6 ? "MXN" : "in"}`}
                                            />
                                            <Input type={`${type == 1 ? "text" : "number"}`} placeholder={`${holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad numérica"}`} />
                                        </InputGroup> :
                                        (type && <Input type={`${type == 1 ? "text" : "number"}`} placeholder={`${holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad numérica"}`} />)
                            }
                            {helper &&
                                <Text size={"3xs"} className="expand-4" w="100%" color={"gray.500"} textAlign={"justify"}>{helper}</Text>
                            }
                        </Stack >
                        {evidence &&
                            <DropImage title={`${title}`} maxPhotos={maxPhotos}/>
                        }
                    </Stack >
                )
            })}
            {checkbox && <CustomCheckbox data={checkbox} area={area} />}
            {select && <CustomSelect data={select} />}
            {add && <Stack direction={"column"} className={`add-module`} spacing={"30px"}>
                <Stack className="grid-center">
                    <h4 className=" blue">{addTitle}</h4>
                    <Stack spacing="30px" className="border-dashed">

                        <Icon as={MdLibraryAdd} role="button" fontSize="80px" className="blue icon-button" />
                    </Stack>
                </Stack>
            </Stack>}
        </>
    )
}