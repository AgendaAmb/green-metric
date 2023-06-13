import { CheckboxGroup, Stack } from "@chakra-ui/react";

import CheckboxItem from "./CheckboxItem";

export default function CustomCheckbox({ elements }) {
    return (
        <CheckboxGroup colorScheme="green" w={"100%"}>
            <Stack
                spacing={["5px", "10px"]}
                direction={["row", "column"]}
                w={"100%"}
            >
                {elements.map((element, index) => {
                    return (
                        <CheckboxItem
                            element={element}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </Stack>
        </CheckboxGroup>
    );
}
