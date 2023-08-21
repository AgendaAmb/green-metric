"use client";

import { Input } from "@chakra-ui/react"
import { useField } from "formik";

export default function CustomInput({ currentValue, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        {
            currentValue ? 
            <Input  {...field} {...props} value={currentValue} isDisabled={true}/>
            :
            <Input {...field} {...props} />
        }
        </>
    )
}