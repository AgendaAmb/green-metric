"use client";
import { CheckboxGroup, Stack } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import CheckboxItem from "./CheckboxItem";

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export default function CustomCheckbox({w = "inherit", checkbox, name }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        setContent(checkbox)
    }, [content])
    return (
        <CheckboxGroup colorScheme="green" w={"100%"}>
            {content?.data?.map((element, index) => {
                return (
                    <CheckboxItem
                        element={element}
                        key={"cb" + index}
                        hasInput={content?.hasInput}
                        index={index}
                        name={`${name}_${index}`}
                        w={w}
                    />
                );
                //return <h1 key={generateKey("checkbox")}>Hi</h1>;
            })}

        </CheckboxGroup>
    );
}
