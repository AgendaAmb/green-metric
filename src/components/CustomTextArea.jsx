import { Textarea, Stack, Text } from "@chakra-ui/react"
import { useState, useRef } from "react";

export default function CustomTextArea({title, text, maxCharacters}){

    const [characterCount, setCharacterCount] = useState(0);
    const ref = useRef(null);

    const handleChange = () => {
        const charactersText = ref?.current?.value;

        if (charactersText.length <= maxCharacters) {
            setCharacterCount(charactersText.length);
        } else {
            setCharacterCount(maxCharacters);
            ref.current.value = charactersText.substring(0, maxCharacters);
        }
    };
    
    return(
        <Stack w="100%" spacing={"30px"}>
            {title && <h4 className="green">{title}</h4>}
            {text && <Text className="self-start">{text}</Text>}
            <Stack position="relative">
                <Textarea resize={"none"} w="1730px" h="400px" borderColor={"gray.400"} onChange={maxCharacters ? handleChange : undefined} ref={ref}/>
                    { maxCharacters && <Text color={"gray.400"} className="character-count">{characterCount}/{maxCharacters}</Text>}
            </Stack>
        </Stack>
    )
}