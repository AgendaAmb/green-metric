"use client";

import { Input} from "@chakra-ui/react"
import { useField } from "formik";

export default function CustomInput(props) {
    const [field, meta, helpers] = useField(props);
    return (
        <Input {...field} {...props}/>
    )
}