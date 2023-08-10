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

    let val;

    try{
        val = form.values[nameSelect];
    }
    catch(e){
        val = "";
    }

    useEffect(() => {
        //console.log("Select", form);
    })
    return (
        <Select placeholder={holder}  className={...classes} name={nameSelect}  value={form.values[nameSelect]} onClick={form.handleChange} onChange={handleSelected} defaultValue={form.values[nameSelect]}>
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
