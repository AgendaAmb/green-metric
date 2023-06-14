import { CheckboxGroup, Stack } from "@chakra-ui/react";

import { useEffect } from "react";

import CheckboxItem from "./CheckboxItem";

export default function CustomCheckbox({ elements, columns = 0 }) {
    let count = 0;
    useEffect(() => {}, [count]);
    return (
        <CheckboxGroup colorScheme="green" w={"100%"}>
            <Stack
                spacing={["5px", "10px"]}
                direction={["row", "column"]}
                w={"100%"}
                className={`column${-columns}`}
            >
                {elements.map((element) => {
                    return (
                        <>
                            <CheckboxItem
                                element={element}
                                index={++count}
                                key={count}
                            />
                        </>
                    );
                })}
            </Stack>
        </CheckboxGroup>
    );
}
