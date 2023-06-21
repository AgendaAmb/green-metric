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
} from "@chakra-ui/react";

import DropImage from "./DropImage";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";
/*
* * Elementos
* * Tipo 1: Texto
* * Tipo 2: Numérico
* * Tipo 3: Porcentaje
* * Tipo 4: Kilogramos
*/
export default function ModuleInput({ title, elements, checkbox, area = false , select}) {
    return (
        <>
            {title && <h4 className="expand-2 blue">{title}</h4>}
            {elements?.map(({ text, holder, type, evidence, span, half, dicotomic, left }, index) => {
                return (
                    <Stack direction="column" className={`${span ? "expand-2" : ""}`} key={index}>
                        <Stack direction="row" w={`${half ? "50%" : "100%"}`} spacing={"30px"}>
                            {text && <Text w="100%">{text}</Text>}
                            {
                                dicotomic ?
                                    <Select>
                                        <option value="-1">Seleccione:</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </Select> :
                                    (type != null) ?

                                        <InputGroup w="100%"  >
                                            <InputLeftAddon

                                                pointerEvents="none"
                                                color="gray.600"
                                                fontSize="1.2em"
                                                children={`${left ? left : type == 1 ? "abc" : type == 2 ? "123" : type == 3 ? "%" : "kg"}`}
                                            />
                                            <Input type={`${type == 1 ? "text" : "number"}`} placeholder={`${holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad numérica"}`} />
                                        </InputGroup> :
                                        (type && <Input type={`${type == 1 ? "text" : "number"}`} placeholder={`${holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad numérica"}`} />)
                            }
                        </Stack >
                        {evidence &&
                            <DropImage />
                        }
                    </Stack >
                )
            })}
            {checkbox && <CustomCheckbox data={checkbox} area={area}/>}
            {select && <CustomSelect data={select} />}
        </>
    )
}