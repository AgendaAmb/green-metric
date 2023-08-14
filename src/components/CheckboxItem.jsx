"use client";
import { Checkbox, Stack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/providers";

export default function CheckboxItem({span = false, element, area, hasInput = false, index = 1, questionCheckbox }) {
    const [enabled, setEnabled] = useState(false);
    const form = useContext(FormContext);
    
    let isChecked = false;

    if(form.values[`${questionCheckbox}`]){
        isChecked = true;
    }
    const handleEnabled = () => {
        setEnabled(!enabled);
    };
    useEffect(() => { 
        if (isChecked) {
            setEnabled(true);
        }
    }, []);
    return (
        <Stack
            direction={["column", "row"]}
            spacing={"10px"}
            w="100%"
            className="grid-center-2"
        >
            <Checkbox
                onChange={handleEnabled}
                defaultChecked={isChecked}
                name={`${questionCheckbox}`}
                h="35px"
                w="100%"
                onSelect={form.handleChange}
                display="grid"
                gridTemplateColumn={`${span ? "1fr" : "1fr 1fr"}`}
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
                    value={form.values[`${questionCheckbox}`]}
                    name={`${questionCheckbox}`}
                    onKeyUp={form.handleChange}
                />
            </Stack>)}
        </Stack>
    );
}
