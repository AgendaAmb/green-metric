// app/providers.tsx
"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Formik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, cloneElement } from "react";

export function Providers({ children }) {
    const [data , setData] = useState({});

    const submit = (e) => {
        console.log(e);
        e.handleFunction();
    }

    
    return (
        <Formik onSubmit={submit} initialValues={{ route: "/", handleFunction: console.log("hello")}}>
        {(props) => (
            <Stack onSubmit={props.handleSubmit} as={"form"}>
                <DndProvider backend={HTML5Backend}>
                    <CacheProvider>
                        <ChakraProvider>
                            {children}
                        </ChakraProvider>
                    </CacheProvider>
                </DndProvider>
            </Stack>
        )}
        </Formik>
    );
}
