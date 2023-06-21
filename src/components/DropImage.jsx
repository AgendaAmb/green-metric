import {
    Icon, Stack
} from "@chakra-ui/react";

import { useState } from "react";


import { MdOutlineUpload, MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md"


import Dropzone from 'react-dropzone';
import Gallery from "./Gallery";

export default function DropImage() {
    const [images, setImages] = useState([]);
    const [reference, setReference] = useState(null);
    const handleImages = (e) => {
        console.log(e);
        e.forEach((file) => {
            let url = URL.createObjectURL(file);
            console.log("url", url)
            console.log("ref", reference)
            setImages([...images, { original: url }]);

        })
    }
    const prev = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index - 1);
    }
    const next = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index + 1);
    }
    return (
        <Stack direction={"column"} className="grid-center" spacing={"30px"}>
            <h3 className="blue">Agregar Evidencia: </h3>
            <Dropzone onDrop={handleImages}>
                {({ getRootProps, getInputProps }) => (
                    <section className="carousel-row">
                        {images?.length > 0 ? <Icon as={MdOutlineSkipPrevious} className="icon-hover" onClick={prev} role="button" /> : <div></div>}
                        <div {...getRootProps()} className="drag-and-drop">
                            <div className={`drop-container ${images?.length == 0 ? "show-container" : "hide-container"}`} role="button">
                                <div>

                                    <MdOutlineUpload className="icon" />
                                </div>
                                <p>Seleccione un archivo o arrástrelo aquí</p>
                            </div>
                            <Gallery images={images} setReference={setReference} />
                            <input {...getInputProps()} />
                        </div>
                        {images?.length > 0 ? <Icon as={MdOutlineSkipNext} className="icon-hover" onClick={next} role="button" /> : <div></div>}

                    </section>
                )}
            </Dropzone>
        </Stack>
    )
}