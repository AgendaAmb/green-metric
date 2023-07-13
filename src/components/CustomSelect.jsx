"use client";
import { Select } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FormContext } from "@/app/providers";


function CustomSelect({ data, setSelected, classes, holder = "Seleccione:", nameSelect }) {
    
    const form = useContext(FormContext);
    const handleSelected = (e) => {
        if (setSelected) {
            setSelected();
            
        }
    };

    useEffect(() => {
        console.log("Select", form);
    })
    return (
        <Select placeholder={holder}  className={...classes} name={nameSelect}  onClick={form.handleChange} onChange={handleSelected}>
            {data?.map((el, index) => {
                return (
                    <option key={"el" + index} value={el}>
                        {el}
                    </option>
                );
            })}
        </Select>
    );
}

export default CustomSelect;
