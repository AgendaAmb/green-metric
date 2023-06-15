import { CheckboxGroup, Stack } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import CheckboxItem from "./CheckboxItem";

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export default function CustomCheckbox({ elements, columns = 0 }) {
    const [items, setItems] = useState(null);
    useEffect(() => {
        if (items === null) {
            setItems(elements);
        }
    }, [items]);
    return (
        <CheckboxGroup colorScheme="green" w={"100%"}>
            <Stack
                spacing={["5px", "10px"]}
                direction={["row", "column"]}
                w={"100%"}
                className={`column${-columns}`}
            >
                {items?.map((element) => {
                    return (
                        <CheckboxItem
                            element={element}
                            key={generateKey("checkbox")}
                        />
                    );
                    //return <h1 key={generateKey("checkbox")}>Hi</h1>;
                })}
            </Stack>
        </CheckboxGroup>
    );
}
