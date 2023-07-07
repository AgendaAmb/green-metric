"use client";
import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "@/app/providers";


function CustomSelect({ data, setSelected, classes, holder = "Seleccione:", nameSelect = "selected" }) {
    
    const form = useContext(FormContext);
    const handleSelected = (e) => {
        if (setSelected) {
            setSelected();
            
        }
    };
    return (
        <Select placeholder={holder}  className={...classes} name={nameSelect}  onChange={form.handleChange} onClick={handleSelected}>
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
