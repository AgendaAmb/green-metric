import { Checkbox, Stack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

export default function CheckboxItem({ element, area }) {
    const [enabled, setEnabled] = useState(false);
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

            </Stack>
        </Stack>
    );
}
