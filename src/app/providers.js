// app/providers.tsx
"use client";

import { withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, createContext, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { getCookie, hasCookie } from 'cookies-next';
import Swal from 'sweetalert2';

export const FormContext = createContext(null);


function PreRender({ children, handleSubmit, handleBlur, handleChange, values, images, setAdmin, ...props }) {
    const [data, setData] = useState({ setAdmin, handleSubmit, handleChange, handleBlur, values: values, images: images });


    useEffect(() => {
        //console.log(props);
    }, []);

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


            <FormContext.Provider value={data}>
                <Stack onSubmit={handleSubmit} as={"form"} className="width-100">
                    {children}
                </Stack>
            </FormContext.Provider>


        );

    }
}

export const Providers = withFormik({
    mapPropsToValues: (values) => {
        
        let vals = {};
        vals = { ...values.data.data };
        return vals;
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

        console.log(values);

        let sent = false;

        const sendAlert = () => {
            setTimeout(() => {
                
                if (sent) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Respuestas guardadas!',
                        text: 'Tus respuestas han sido guardadas con éxito',
                        showConfirmButton: false,
                    })
                }
                else if (!sent) {
                    Swal.fire({
                        icon: 'warning',
                        title: '¡Precaución!',
                        text: 'Una o más respuestas podrían no reflejar los cambios realizados guarde nuevamente sus respuestas, si el problema persiste contacte al administrador',
                        showConfirmButton: false,
                    })
                }
            }, 1000);
        }

        for (const [key, value] of Object.entries(values)) {
            if (value === "No hay datos") {
                continue;
            }
            let real = value;
            /* if (value === "on") {
                real = true;
            } */
            
            
            axios.post('/GreenMetric/api/answers', {
                value: real,
                question: key
            })
            .then((response) => {
                    if (response.status === 200 && sent !== true) {
                        sent = true;
                    }
                })
                .catch(function (error) {
                    console.log(value);
                    sent = false;
                });
        }
        

        //}
        setSubmitting(false);
        sendAlert();
        
    },

    displayName: 'GreenMetricForm',
})(PreRender);