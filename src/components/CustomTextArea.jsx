import { Textarea, Stack, Text } from "@chakra-ui/react"
import { useState, useRef } from "react";
import { useField, Field } from 'formik';

export default function CustomTextArea({ title, text, name = "NoInputName", maxCharacters }) {
    //const [field, meta, helpers] = useField(name);
    const [characterCount, setCharacterCount] = useState(0);
    const ref = useRef(null);

    const handleChange = (e) => {
        const value = e?.target?.value;
        

        if (value?.length <= maxCharacters) {
            setCharacterCount(value.length);
        } else if(value?.length > maxCharacters){
            setCharacterCount(maxCharacters);
            e.target.value = value.substring(0, maxCharacters);
        }
    };

    return (
        <Stack w="100%" spacing={"30px"} >
            {title && <h4 className="green">{title}</h4>}
            {text && <Text className="self-start">{text}</Text>}
            <Stack position="relative" >
                <Field name={name} as="textarea" className={"custom-textarea"}/>
                {maxCharacters && <Text color={"gray.400"} className="character-count">{characterCount}/{maxCharacters}</Text>}
            </Stack>
        </Stack>
    )
}