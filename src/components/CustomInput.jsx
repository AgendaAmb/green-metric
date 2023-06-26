import { InputGroup, Input, Stack, Text, InputLeftAddon, FormLabel, FormControl, FormHelperText } from "@chakra-ui/react"

export default function CustomInput({ title = null, items, type = -1, helper = "\0", shrink = 1 }) {
    return (
        <Stack direction={"row"} w="90%" className="expand-4">
            {title != null && <Text textAlign="left" padding={`${helper == "\0" ? "0 8px" : "0px"}`}>{title}</Text>}
            <FormControl flexShrink={shrink}>
                <Stack direction={"row"}>
                    <InputGroup w="100%" >
                        {type > 0 && <InputLeftAddon

                            pointerEvents="none"
                            color="gray.600"
                            fontSize="1.2em"
                            children={`${type == 1 ? "abc" : type == 2 ? "123" : type == 3 ? "%" : type == 4 ? "kg" : type == 5 ? "m2" : type == 6 ? "MXN" : "in"}`}
                        />}
                        {
                            items.map((it) => {
                                return(
                                    <Input type={`${type == 1 ? "text" : "number"}`} placeholder={`${it != null ? it : type == 1 ? "Respuesta libre" : "Cantidad numérica"}`} marginRight={"15px"} />
                                )
                            })
                        }

                    </InputGroup>
                </Stack>
                <FormHelperText>{helper}</FormHelperText>
            </FormControl>
        </Stack>
    )
}