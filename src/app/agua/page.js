
'use client';
import Agua from "@components/Agua";
import { withFormik } from "formik";


export function AguaPage() {

    return (
        <div className="overflow-y">
            <Agua />
        </div>
    );
}


export const AguaMain = withFormik({
    mapPropsToValues: (props) => {
        let values = {};
        values = { ...props?.data?.data };
        return values;
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {

        for (const [key, value] of Object.entries(values)) {
            axios.post('/GreenMetric/api/answers', {
                value: value,
                question: key
            })
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Respuestas guardadas!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(function (error) {
                    console.log("Error con la BD");
                });
        }
        setSubmitting(true);

    },

    displayName: 'AguaForm',
})(AguaPage);


export default function Page(props) {
    return (
        <div className="overflow-y">
            <AguaMain data={props} />
        </div>
    );
}