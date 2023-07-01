"use client";
import { Select } from "@chakra-ui/react";



function CustomSelect({ data, setSelected, classes, holder = "Seleccione:" }) {

    const handleSelected = (e) => {
        if(setSelected){
            setSelected();
        }
    };
    return (
        <Select placeholder={holder} onChange={handleSelected} className={...classes}>
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
