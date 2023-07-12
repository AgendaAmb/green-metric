"use client";
import {
    Input,
    Stack,
    Text,
    InputGroup,
    Select,
    InputLeftAddon,
    InputRightElement,
    Button,
    IconButton
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { FormContext } from "@/app/providers";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginInput({ title, elements, column = false, span = false, inputLarge = false, text, addModule, colorTitle = "blue"}) {
    
    const form = useContext(FormContext);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (    
        <>
            {title && <h4 className={`expand-2 ${colorTitle}`}>{title}</h4>}
            {text && <Text className="expand-2 blue">{text}</Text>}
            {elements?.map(({ text, holder, type = 0, left, helper, textTitle = "", vertical = false}, inputName = "undefined", index,) => {
                return (
                    <Stack direction="column" className={"expand-2"} key={index} >
                        <Stack direction={`${column ? "column" : "row"}`} gridTemplateColumns={`${vertical ? "repeat1fr" : "1.3fr 1fr 1fr 1fr"}`} display={"grid"} gridTemplateRows={`${vertical ? "1fr" : "repeat(auto-fit, minmax(50px, 1fr))"}`}>
                                <InputGroup onKeyUp={form.handleChange} w="100%" className={`${text == null ? "expand-4" : ""} ${inputLarge ? "expand-3" : "expand-2"}`} size="sm">
                                    <InputLeftAddon
                                        pointerEvents="none"
                                        color="gray.600"
                                        fontSize="1.2em"
                                        children={`${left ? left : type == "text" ? "123" : "***"}`}
                                    />
                                    <Input
                                        name={inputName}
                                        type={show ? "text" : type}
                                        placeholder={holder}
                                        marginRight="15px"
                                    />

                                    {type == "password" && (
                                        <InputRightElement>
                                            <IconButton
                                                h='1.75rem'
                                                size='sm'
                                                onClick={handleClick}
                                                icon={show ? <FaEyeSlash /> : <FaEye />}
                                            />             
                                        </InputRightElement>
                                    )}
                                </InputGroup>
                        </Stack >
                    </Stack >
                )
            })}
        </>
    )
}
