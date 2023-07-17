// app/providers.tsx
"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, createContext, useEffect, useMemo } from "react";
import axios from "axios";


export const FormContext = createContext(null);

function FormBase({ children, handleSubmit, handleChange, values, setFieldValue }) {
    const [valuesFunction, setValuesFunction] = useState(setFieldValue);
    const [submitFunction, setSubmitFunction] = useState(handleSubmit);
    const [data, setData] = useState({ values, handleChange, setValuesFunction, setSubmitFunction, submitFunction });
    const fetchData = () => {
        try {
            const response = axios.get('/GreenMetric/api/answers', {
                params: { value: 1 } // Pasar los parámetros como parte del objeto `params`
            }).then((res) => {
                //console.log(res.data);
                let result = [];
                let i = 0;
                for (let el of res.data) {
                    let obj = {};
                    obj[el.question_id] = el.answer
                    result[i++] = obj;
                }
                setData(...data, result);
            })
                .catch((e) => {
                    console.log("Error con la BD");
                })
        } catch (error) {
            console.log("Error con la request");
        }
    };

    useEffect(() => {
        //fetchData();

    }, []);

    const contextValue = useMemo(() => data, [data]);
    return (

        <FormContext.Provider value={contextValue}>
            <Stack onSubmit={handleSubmit} as={"form"} className="width-100">
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

    /* fetchData: async () => {
        try {
            const response = await axios.get('/GreenMetric/api/answers', { value: 1 }) // Reemplaza '/api/endpoint' por tu ruta de API correcta
            const data = response.data;
            console.log(data); // Haz algo con los datos obtenidos de la API
        } catch (error) {
            console.error(error);
        }
    },
 */
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            //Checking if form is login
            const isLogin = values?.hasOwnProperty("cve_rpe") && values?.hasOwnProperty("pwd_login");
            //console.log("Values: ", values);
            //console.log(isLogin);
            if (isLogin) {
                const id = values.cve_rpe || "";
                const pwd = values.pwd_login || "";
                /* console.log(id);
                console.log(pwd); */
                axios.post("/GreenMetric/api/auth", { params: { user_id: id, password: pwd } });
            }
            else {
                for (const [key, value] of Object.entries(values)) {
                    axios.post('/GreenMetric/api/answers', {
                        value: value,
                        question: key
                    })
                        .then(function (response) {
                            //console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
            setSubmitting(false);
        }, 100);
    },

    displayName: 'GreenMetricForm',
})(FormBase);