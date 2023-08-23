"use client";
import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    Select,
    InputLeftAddon,
    Icon,
    Button

} from "@chakra-ui/react";

import { MdLibraryAdd } from "react-icons/md";
import { useContext, useState } from "react";
import { FormContext } from "@/app/providers";
import DropImage from "./DropImage";

import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";
import DicotomicSelect from "./DicotomicSelect";
/*
* * Elementos
* * Tipo 1: Texto
* * Tipo 2: Numérico
* * Tipo 3: Porcentaje
* * Tipo 4: Kilogramos
* * Tipo 5: Metros Cuadrados
*/
export default function ModuleInput({ title, elements, selectValue, checkbox, area = false, select, add, addTitle = "Añadir otro módulo", column = false, span = false, inputLarge = false, text, addModule, colorTitle = "blue", questionSelect = "undefined", questionEvidence = "undefined", questionCheckBox = "undefined", hasSelect, emptyStart = false}) {
    
    const form = useContext(FormContext);
    const handleChange = (e) => {
        setTimeout(()  => {
            form.handleChange(e);
        }, 10000);
    }
    return (
        <>
            {emptyStart && <h4 className={`expand-2`}>{" "}</h4>}
            {title && <h4 className={`expand-2 ${colorTitle}`}>{title}</h4>}
            {addModule && (
                <Button className="add-button" size='sm' onClick={addModule.func}>
                    {` + `}
                </Button>
            )}
            {text && <Text className="expand-2 blue">{text}</Text>}
            {elements?.map(({ text, holder, type = 0, evidence, span, half, dicotomic, left, title = "Evidencias ", helper, textTitle = "", leftTitle = false, maxPhotos = -1, vertical = false, additional, disabled = false, customName = "undefined", question = "undefinied", questionDicotomic = "undefined", noAddon = false, currentValue }, index,) => {
                const isInputEnable = hasSelect && dicotomic && selectValue === '1';

                let answer;
                
                try {
                    answer = form?.values[question]
                }
                catch (e) {
                    answer = "";
                }

                return (
                    <Stack direction="column" className={`${span ? "expand-2" : ""}`} key={index} >
                        <Stack direction={`${column ? "column" : "row"}`} gridTemplateColumns={`${vertical ? "repeat1fr" : "1.3fr 1fr 1fr 1fr"}`} display={"grid"} gridTemplateRows={`${vertical ? "1fr" : "repeat(auto-fit, minmax(50px, 1fr))"}`}>
                            {text && <Text className={inputLarge ? "" : "expand-2"} >{textTitle} {text}</Text>}
                            {dicotomic ? (
                                <DicotomicSelect gridColumn={"span 4"}  name={questionDicotomic}  />
                            ) : ( type != null ) && (
                                <InputGroup w="100%" className={`${text == null ? "expand-4" : ""} ${inputLarge ? "expand-3" : "expand-2"}`} size="sm" onChange={form.handleChange} onBlur={form.handleBlur}>
                                    {!noAddon || type > 0 && (
                                        <InputLeftAddon
                                            pointerEvents="none"
                                            color="gray.600"
                                            fontSize="1.2em"
                                            children={`${left ? left : type == 1 ? "abc" : type == 2 ? "123" : type == 3 ? "%" : type == 4 ? "kg" : type == 5 ? "m2" : type == 6 ? "MXN" : "in"}`}
                                        />
                                    )}
                                    {type != 0 && (
                                        <CustomInput
                                            name={question}
                                            /* value={answer} */
                                            currentValue={currentValue}
                                            id="input"
                                            type={type == 1 ? "text" : "number"}
                                            placeholder={holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad numérica"}
                                            marginRight="15px"
                                        // disabled={isInputEnable || disabled}
                                        />
                                    )}
                                    {additional != null && (
                                        <CustomInput
                                            name={`${question}_a`}
                                            type={additional.type == 1 ? "text" : "number"}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            placeholder={additional.holder != null ? additional.holder : additional.type == 1 ? "Respuesta libre" : "Cantidad numérica"}
                                            marginRight="15px"
                                            currentValue={currentValue}
                                            disabled={additional.disabled}

                                        />
                                    )}
                                </InputGroup>
                            )}
                            {helper &&
                                <Text className="expand-4 sub-text" w="100%" color={"gray.500"} textAlign={"justify"}>{helper}</Text>
                            }

                        </Stack >
                        {evidence &&
                            <DropImage questionId={question} title={`${title}`} maxPhotos={maxPhotos} />
                        }

                    </Stack >
                )
            })}
            {checkbox && <CustomCheckbox checkbox={checkbox} name={questionCheckBox} />}
            {select && <CustomSelect data={select} name={questionSelect} />}
            {add && <Stack direction={"column"} className={`add-module`} spacing={"30px"} height={"100%"} >

                <Stack className="grid-center" gridRow={`${span ? "span 2" : "span 1"}`}>
                    {!span && <h4 className=" blue">{addTitle}</h4>}
                    <Stack spacing="30px" className="border-dashed">
                        <Icon as={MdLibraryAdd} role="button" fontSize="80px" className="blue icon-button" />
                    </Stack>
                </Stack>
            </Stack>}
        </>
    )
}