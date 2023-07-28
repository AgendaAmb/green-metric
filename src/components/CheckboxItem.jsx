"use client";
import { Checkbox, Stack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/providers";

export default function CheckboxItem({ element, area, hasInput = false, index = 1, questioncheckbox}) {
    const [enabled, setEnabled] = useState(false);
    const form = useContext(FormContext);
    console.log(form);
    let val;

    try{
        val = form.values[questioncheckbox];
    }
    catch(e){
        val = "";
    }


    const handleEnabled = () => {
        setEnabled(!enabled);
    };
    useEffect(() => { }, []);
    return (
        <Stack
            direction={["column", "row"]}
            spacing={"10px"}
            w="100%"
            className="grid-center-2"
        >
            <Checkbox
                onChange={handleEnabled}
                name={`checkbox.${index}.selected`}
                value={val}
                h="35px"
                w="100%"
                onSelect={form.handleChange}
            >
                {element}
            </Checkbox>
            {hasInput && (<Stack
                className={`relative-container grid-center${area ? "-3" : ""}`}
                spacing={"10px"}
                w="100%"
                direction={["column", "row"]}
            >
                {!enabled && <div className="disabled"></div>}
                <Input
                    placeholder={`${area ? "Investigador" : "Representante"}`}
                    w={"100%"}
                    className="grid-center"
                    name={`${questioncheckbox}.${index} .value`}
                    onKeyUp={form.handleChange}
                />
            </Stack>)}
        </Stack>
    );
}
