import {
    Icon, Stack
} from "@chakra-ui/react";

import { useEffect, useState } from "react";


import { MdOutlineUpload, MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md"


import Dropzone from 'react-dropzone';
import Gallery from "./Gallery";

export default function DropImage({ title = "Agregar Evidencia: ", maxPhotos = 1 }) {
    const [images, setImages] = useState([]);
    const [photos, setPhotos] = useState(0);
    const [reference, setReference] = useState(null);
    const handleImages = (e) => {
        let count = 0;
        let tmpImages = [...images];
        e.forEach((file) => {
            if(photos > 0){
                let url = URL.createObjectURL(file);
                console.log("url", url)
                console.log("ref", reference)
                tmpImages.push({original: url});
            }
            count++;
        })
        setPhotos(photos - count);
        setImages(tmpImages);
    }
    const prev = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index - 1);
    }
    const next = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index + 1);
    }

    useEffect(() => {
        setPhotos(maxPhotos)
    }, [maxPhotos]);
    return (
        <Stack direction={"column"} className="grid-center" spacing={"30px 0"}>
            <div className="drop-title">
                <h3 className="blue">{`${title} `}</h3>
                {photos > 0 && <h3 className="red">({photos})</h3>}
            </div>
            <Dropzone onDrop={handleImages} maxFiles={maxPhotos} multiple={true}>
                {({ getRootProps, getInputProps }) => (
                    <section className="carousel-row">
                        {images?.length > 1 ? <Icon as={MdOutlineSkipPrevious} className="icon-hover" onClick={prev} role="button" /> : <div></div>}
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
                        {images?.length > 1 ? <Icon as={MdOutlineSkipNext} className="icon-hover" onClick={next} role="button" /> : <div></div>}

                    </section>
                )}
            </Dropzone>
        </Stack>
    )
}