// app/providers.tsx
"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Formik, useFormik, withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, createContext } from "react";

export const FormContext = createContext(null);  

function FormBase({ children, handleSubmit, handleChange, values }) {
    const [data, setData] = useState({values, handleChange});



    return (

        <FormContext.Provider value={data}>
            <Stack onSubmit={handleSubmit} as={"form"}>
                <DndProvider backend={HTML5Backend}>
                    <CacheProvider>
                        <ChakraProvider>
                            {children}
                        </ChakraProvider>
                    </CacheProvider>
                </DndProvider>
            </Stack>
        </FormContext.Provider>

    );
}


export const Providers = withFormik({
    mapPropsToValues: () => ({}),

    // Custom sync validation
    validate: values => {
        const errors = {};

        /* if (!values.name) {
            errors.name = 'Required';
        } */

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        console.log("Printing")
        setTimeout(() => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm',
})(FormBase);