"use client"
import {
  Icon, Stack, Input, Text
} from "@chakra-ui/react";

import { useEffect, useState, useRef } from "react";

import { MdOutlineUpload, MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md"
import Swal from 'sweetalert2'

import Dropzone from 'react-dropzone';
import Gallery from "./Gallery";
import axios from 'axios';

export default function DropImage({ title = "Agregar Evidencia: ", maxPhotos = -1, evidencename, pdf = false, sub = "" }) {
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState(1);
  const [reference, setReference] = useState(null);

  const ref = useRef(null);

  const handleImages = async (e) => {
    try {
      if (maxPhotos !== -1 && e.length > photos) {
        throw `No puedes agregar más de ${maxPhotos} archivos.`;
      }

      const newImages = e.map((file, index) => ({
        original: URL.createObjectURL(file),
        name: `${title}-${index + 1}`,
      }));

      // Enviar las imágenes al servidor
      /* await Promise.all(
        newImages.map(async (image) => {
          try {
            const response = await axios.post("/GreenMetric/images/upload", { image });
            console.log(response.data.message);
          } catch (error) {
            console.error('Error al subir la imagen:', error);
          }
        })
      ); */
      // Actualizar el estado con las nuevas imágenes
      setImages([...images, ...newImages]);
      setPhotos((prevPhotos) => prevPhotos - e.length);
    } catch (error) {
      Swal.fire('¡Error!', error, 'error');
    } finally {
      disableHover();
    }
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setPhotos((prevPhotos) => prevPhotos + 1);
  };


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

    if (!node?.className.includes("hover-container")) {
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
    <Stack direction="column" className="grid-center" spacing="30px 0">
      <div className="drop-title">
        <h3 className="blue">{`${title} `}</h3>
        {photos > 0 && <h3 className="red">({photos})</h3>}
      </div>
      <Dropzone
        onDrop={handleImages}
        multiple={true}
        onDragEnter={enableHover}
        onDragLeave={disableHover}
        accept={{ "image/*": ["*.*", ".pdf"] }}
      >
        {({ getRootProps, getInputProps }) => (
          <section className="carousel-row">
            {images?.length > 1 ? (
              <Icon
                as={MdOutlineSkipPrevious}
                className="icon-hover"
                onClick={prev}
                role="button"
              />
            ) : (
              <div></div>
            )}
            <div {...getRootProps()} className="drag-and-drop">
              <div
                ref={ref}
                className={`drop-container ${images?.length === 0 ? "" : "hide-container"
                  }`}
                role="button"
              >
                <div className="head">
                  <Text>{sub}</Text>
                  <div className="icon">
                    <MdOutlineUpload className="icon" />
                  </div>
                </div>
                <p>
                  Seleccione un archivo o arrástrelo aquí
                  <br />
                  {<sub>Compatible (imágenes {pdf && "y pdf"})</sub>}
                </p>
              </div>
              <Gallery images={images} setReference={setReference} />
              <Input {...getInputProps()} />
            </div>
            {images?.length > 1 ? (
              <Icon
                as={MdOutlineSkipNext}
                className="icon-hover"
                onClick={next}
                role="button"
              />
            ) : (
              <div></div>
            )}

            {images.length > 0 && (
              <div className="delete-top-right">
                <span role="button" onClick={() => deleteImage(0)}>
                  <p>x</p>
                </span>
              </div>
            )}
          </section>
        )}
      </Dropzone>
    </Stack>

  )
}