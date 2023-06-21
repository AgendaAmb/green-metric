import { CheckboxGroup, Stack } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import CheckboxItem from "./CheckboxItem";

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export default function CustomCheckbox({ data , area}) {
    useEffect(() => {
        
    }, [data])
    return (
        <CheckboxGroup colorScheme="green" w={"100%"}>
            
                {data?.map((element, index) => {
                    return (
                        <CheckboxItem
                            element={element}
                            key={"cb" + index}
                            area={area}
                        />
                    );
                    //return <h1 key={generateKey("checkbox")}>Hi</h1>;
                })}
            
        </CheckboxGroup>
    );
}
