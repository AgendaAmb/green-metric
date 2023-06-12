import { Select } from "@chakra-ui/react";

function SelectForm({ options }) {
    let count = 0;
    return (
        <Select placeholder="Seleccionar Dependencia">
            {options.map((option) => {
                return (
                    <option key={count++} value={option}>
                        {option}
                    </option>
                );
            })}
        </Select>
    );
}

export default SelectForm;
