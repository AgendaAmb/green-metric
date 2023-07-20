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

function FormBase({ children, handleSubmit, handleChange, values }) {
    console.log("valores", values.get);
    const [submitFunction, setSubmitFunction] = useState(handleSubmit);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(async() => {
        //fetchData();
        const vals = await values;
        console.log("vals", vals);
        setData({ values :vals, handleChange, setSubmitFunction, submitFunction });
        setLoading(false);
    }, []);

    const contextValue = useMemo(() => data, [data]);
    if(loading) return (<div>Loading...</div>)
    else{
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
}

export const Providers = withFormik({
    mapPropsToValues: async(props) => {
        const response = axios.get('/GreenMetric/api/answers', {
            params: { value: 1 } // Pasar los parámetros como parte del objeto `params`
        });
        const results = await response;
        return results.data;
    },

    // Custom sync validation
    validate: values => {
        const errors = {};



        /* if (!values.name) {
            errors.name = 'Required';
        } */

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            //Checking if form is login
            const isLogin = values?.hasOwnProperty("cve_rpe") && values?.hasOwnProperty("pwd_login");
            
            if (isLogin) {
                const id = values.cve_rpe || "";
                const pwd = values.pwd_login || "";
                
                axios.post("/GreenMetric/api/auth", { params: { user_id: id, password: pwd } }).then((res) => { }).catch((e) => {
                    console.log("error")
                });
            }
            else {
                //alert(JSON.stringify(values, null, 2));
                //console.log(values);
                for (const [key, value] of Object.entries(values)) {
                    axios.post('/GreenMetric/api/answers', {
                        value: value,
                        question: key
                    })
                        .then(function (response) {
                            //console.log(response);
                        })
                        .catch(function (error) {
                            console.log("Error con la BD");
                        });
                }
            }
            setSubmitting(false);
        }, 100);
    },

    displayName: 'GreenMetricForm',
})(FormBase);