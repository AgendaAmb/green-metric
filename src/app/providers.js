// app/providers.tsx
"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Formik, useFormik, withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, createContext } from "react";
import axios from "axios";


export const FormContext = createContext(null);

function FormBase({ children, handleSubmit, handleChange, values }) {
    const [data, setData] = useState({ values, handleChange });



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
        console.log("Printing", values)
        let data = [];
        setTimeout(() => {
            /* for (const [key, value] of Object.entries(values)) {
                axios.post('/GreenMetric/api/sendAnswer', {
                    value: value,
                    question: key
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } */
            /* const mysql = require('mysql2');
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                database: 'green-metric'
            });

            // simple query
            connection.query(
                'SELECT * FROM `users`',
                function (err, results, fields) {
                    console.log(results); // results contains rows returned by server
                    console.log(fields); // fields contains extra meta data about results, if available
                }
            ); */

            console.log(data);
            //alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm',
})(FormBase);