"use client";
import { CheckboxGroup, Stack } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import CheckboxItem from "./CheckboxItem";

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export default function CustomCheckbox({ checkbox}, nameCheckBox = "CheckBox", field = []) {
    const [content, setContent] = useState({});
    useEffect(() => {
        setContent(checkbox)
    }, [content])
    return (
        <CheckboxGroup colorScheme="green" w={"100%"} {...field} name = {nameCheckBox}>
            
                {content?.data?.map((element, index) => {
                    return (
                        <CheckboxItem
                            element={element}
                            key={"cb" + index}
                            hasInput={content?.hasInput}
                        />
                    );
                    //return <h1 key={generateKey("checkbox")}>Hi</h1>;
                })}
            
        </CheckboxGroup>
    );
}
