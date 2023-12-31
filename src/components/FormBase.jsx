// app/providers.tsx
"use client";

import { withFormik } from "formik";
import { Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

import Swal from 'sweetalert2';



function PreRender({ children, handleSubmit, handleBlur, handleChange, values, images, setAdmin, refresh, ...props }) {
    const [data, setData] = useState({ setAdmin, handleSubmit, handleChange, handleBlur, values: values, images: images });

    useEffect(() => {
        //console.log(props);
    }, []);

    return (
        <>

            <FormTag data={data} handleSubmit={handleSubmit} refresh={refresh}>
                {children}
            </FormTag>

        </>
    );
}


function FormTag({ children, handleSubmit, data, refresh }) {
    const [loading, setLoading] = useState(true);
   
    /* const fetchData = useCallback(async () => {
        setData({ values: data, handleChange });
        const data = await values;
    }, [data]); */
    const submit = (e) => {
        handleSubmit(e);
        //refresh();

    }
    useEffect(() => {
        /* const interval = setInterval(async () => {
            if (hasCookie("user")) {
                let user = getCookie("user");
                try {
                    user = JSON.parse(user);
                    handleSubmit();
                } catch (e) {
                    clearInterval(interval);
                    console.log("Error al parsear cookie");
                }
            }
        }, 1000); */
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


            
                <Stack onSubmit={submit} as={"form"} className="width-100">
                    {children}
                </Stack>
            


        );

    }
}

export const FormBase = withFormik({
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
                    //console.log(value);
                    sent = false;
                });
        }
        

        //}
        setSubmitting(false);
        sendAlert();
        
    },

    displayName: 'GreenMetricForm',
})(PreRender);