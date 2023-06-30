import {
    Icon, Stack
} from "@chakra-ui/react";

import { useEffect, useState, useRef } from "react";

import { MdOutlineUpload, MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md"
import Swal from 'sweetalert2'

import Dropzone from 'react-dropzone';
import Gallery from "./Gallery";

export default function DropImage({ title = "Agregar Evidencia: ", maxPhotos = -1 }) {
    const [images, setImages] = useState([]);
    const [photos, setPhotos] = useState(1);
    const [reference, setReference] = useState(null);

    const ref = useRef(null);

    const handleImages = (e) => {
        let count = 0;
        let tmpImages = [...images];

        try {
            if(maxPhotos != -1 && e.length > photos){
                throw `No puedes agregar más de ${maxPhotos} archivos.`;
            }

            e.forEach((file) => {
                if(photos > 0 || maxPhotos == -1){
                    let url = URL.createObjectURL(file);
                    tmpImages.push({original: url});
                }
                count++;
            })
            setPhotos(photos - count);
            setImages(tmpImages);
        }
        catch(e){
            Swal.fire(
                '¡Error!',
                e,
                'error'
              )
        }
        finally {
            disableHover();

        }
    
        
    }
    const prev = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index - 1);
    }
    const next = (e) => {
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index + 1);
    }

    const enableHover = () => {
        let node = ref?.current;
        let classN = node?.className;
        classN ??= "";
        
        if(!node?.className.includes("hover-container")){
            node.className = `${classN} hover-container`;
        }

    }
    const disableHover = () => {
        let node = ref?.current;
        node.className = `drop-container ${images?.length == 0 ? "" : "hide-container"}`;
    }

    useEffect(() => {
    
        setPhotos(maxPhotos)
    }, []);
    return (
        <Stack direction={"column"} className="grid-center" spacing={"30px 0"}>
            <div className="drop-title">
                <h3 className="blue">{`${title} `}</h3>
                {photos > 0 && <h3 className="red">({photos})</h3>}
            </div>
            <Dropzone onDrop={handleImages} multiple={true} onDragEnter={enableHover} onDragLeave={disableHover}>
                {({ getRootProps, getInputProps }) => (
                    <section  className="carousel-row">
                        {images?.length > 1 ? <Icon as={MdOutlineSkipPrevious} className="icon-hover" onClick={prev} role="button" /> : <div></div>}
                        <div {...getRootProps()} className="drag-and-drop">
                            <div ref={ref} className={`drop-container ${images?.length == 0 ? "" : "hide-container"}`} role="button">
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