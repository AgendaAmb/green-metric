import { Select } from "@chakra-ui/react";

function SelectForm({ options, setSelected }) {
    let count = 0;
    const handleSelected = (e) => {
        setSelected(e.target.value || "Seleccione: ");
    };
    return (
        <Select placeholder="Seleccionar Dependencia" onChange={handleSelected}>
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
