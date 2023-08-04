// app/providers.tsx
"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, createContext, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { getCookie, hasCookie } from 'cookies-next';


export const FormContext = createContext(null);


function PreRender({ children, handleSubmit, handleBlur, handleChange, values }) {
    const [data, setData] = useState({ handleSubmit, handleChange, handleBlur, values: values });



    return (
        <>

            <FormBase data={data} handleSubmit={handleSubmit}>
                {children}
            </FormBase>

        </>
    );
}


function FormBase({ children, handleSubmit, data }) {
    const [loading, setLoading] = useState(true);

    /* const fetchData = useCallback(async () => {
        setData({ values: data, handleChange });
        const data = await values;
    }, [data]); */
    useEffect(() => {

        //fetchData();
        /* fetchData().catch((err) => {
            console.log("Error en obtener datos de BD");
        }).then(() => {
            console.log(data);
        }); */
        setLoading(false);
    }, []);

    if (loading) return (<div>Loading...</div>)
    else {
        return (

            <DndProvider backend={HTML5Backend}>
                <CacheProvider>
                    <ChakraProvider>
                        <FormContext.Provider value={...data}>
                            <Stack onSubmit={handleSubmit} as={"form"} className="width-100">
                                {children}
                            </Stack>
                        </FormContext.Provider>
                    </ChakraProvider>
                </CacheProvider>
            </DndProvider>

        );

    }
}

export const Providers = withFormik({
    mapPropsToValues: (props) => {
        let values = {};
        values = { ...props.data.data };
        return values;
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


        /* //Checking if form is login
        const isLogin = values?.hasOwnProperty("cve_rpe") && values?.hasOwnProperty("pwd_login");

        if (isLogin) {
            const id = values.cve_rpe || "";
            const pwd = values.pwd_login || "";

            const interval = setInterval(() => {
                if (hasCookie("user")) {
                    clearInterval(interval);
                    window.location.href = "/GreenMetric/home";
                }
                else {
                    axios.post("/GreenMetric/api/auth", { params: { user_id: id, password: pwd } });
                }
            }, 1000);

        }
        else { */
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
        //}
        setSubmitting(true);

    },

    displayName: 'GreenMetricForm',
})(PreRender);