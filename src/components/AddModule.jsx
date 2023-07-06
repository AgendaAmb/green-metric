import { Icon, Stack } from "@chakra-ui/react"
import { MdLibraryAdd } from "react-icons/md"
export default function AddModule({ title = "Añadir Modulo"}) {
    return (
        <div>
                <div className="grid-center full-container" >
                    <h4 className="blue expand-3">{title}</h4>
                    <Stack spacing="30px" className="border-dashed">
                        <Icon as={MdLibraryAdd} role="button" fontSize="80px" className="blue icon-button" />
                    </Stack>
                </div>
            
        </div>
    )
}