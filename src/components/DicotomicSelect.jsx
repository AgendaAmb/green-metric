
import { Select } from "@chakra-ui/react";
import { useField } from "formik";


export default function DicotomicSelect(props) {
    const [field, meta, helpers] = useField(props);
    
    return (
        <Select  {...field} {...props} gridColumn={"span 4"} >
            <option value={0}>No</option>
            <option value={1}>Si</option>
        </Select>
    )
}