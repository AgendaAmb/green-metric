import { Checkbox, Stack, Input } from "@chakra-ui/react";
import { useState } from "react";
export default function CheckboxItem({ element, index }) {
    const [enabled, setEnabled] = useState(false);
    const { name, area } = element;
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
                key={index}
                value={`${name}`}
                onChange={handleEnabled}
                h="35px"
                w="100%"
            >
                {name}
            </Checkbox>
            <Stack
                className={`relative-container grid-center${area ? "-2" : ""}`}
                spacing={"10px"}
                w="100%"
                direction={["column", "row"]}
            >
                {!enabled && <div className="disabled"></div>}
                <Input
                    key={index}
                    placeholder={`${area ? "Investigador" : "Representante"}`}
                    w={"100%"}
                    className="grid-center"
                />
                {area && (
                    <Input
                        key={index + "a"}
                        placeholder={`${"Area"}`}
                        w="100%"
                        className="grid-center"
                    />
                )}
            </Stack>
        </Stack>
    );
}
