import { Checkbox, Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

export default function CheckboxItem({ element, area }) {
    const [enabled, setEnabled] = useState(false);
    const handleEnabled = () => {
        setEnabled(!enabled);
    };

    return (
        <Stack
            direction={["column", "row"]}
            spacing={"10px"}
            w="100%"
            className="grid-center-2"
        >
            <Checkbox
                value={`${element}`}
                onChange={handleEnabled}
                h="35px"
                w="100%"
            >
                {element}
            </Checkbox>
            <Stack
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
                />
                {area && (
                    <>
                        <Input
                            placeholder={`${"Area"}`}
                            w="100%"
                            className="grid-center"
                        />

                        <Button
                            
                            colorScheme="blue"
                            variant="solid"
                            className="grid-center"
                            fontSize="2xl"
                        >+</Button>
                            
                       
                    </>
                )}
            </Stack>
        </Stack>
    );
}
