
'use client';
import Agua from "@components/Agua";
import { withFormik } from "formik";





export default function Page(props) {
    return (
        <div className="overflow-y">
            <Agua data={props} />
        </div>
    );
}