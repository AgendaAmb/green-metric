import { Textarea, Stack, Text } from "@chakra-ui/react"

export default function CustomTextArea({title, text}){
    return(
        <Stack className="grid-center" w="100%" spacing={"30px"}>
            {title && <h4 className="green">{title}</h4>}
            {text && <Text className="self-start">{text}</Text>}
            <Textarea resize={"none"} maxW="900px" h="400px" borderColor={"gray.400"} />
        </Stack>
    )
}