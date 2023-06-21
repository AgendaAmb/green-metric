import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
export default function DragDrop({ setImages, images }) {
    const [file, setFile] = useState(null);

    const handleChange = (file) => {
        setFile(file);
        let url = URL.createObjectURL(file);
        setImages([...images, { original: url }]);
    };
    return (
        <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}

        />
    );
}
