"use client";
import { Select } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FormContext } from "@/app/providers";
import { useField } from "formik";

function CustomSelect({ data, setSelected, classes, holder = "Seleccione:", ...props }) {
    const [field, meta, helpers] = useField(props);

    const form = useContext(FormContext);
    const handleSelected = (e) => {
        if (setSelected) {
            setSelected();

        }
    };

    

    useEffect(() => {
        //console.log("Select", form);
    })
    return (
        <Select {...field} {...props} className={...classes} >
            {data?.map((el, index) => {
                return (
                    <option key={"el" + index}>
                        {el}
                    </option>
                );
            })}
        </Select>
    );
}

export default CustomSelect;
