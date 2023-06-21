import { Select } from "@chakra-ui/react";

function CustomSelect({ data, setSelected }) {

    const handleSelected = (e) => {
        setSelected(e.target.value || "Seleccione: ");
    };
    return (
        <Select placeholder="Seleccionar Dependencia" onChange={handleSelected}>
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
