"use client"
import {
  Icon, Stack, Input, Text
} from "@chakra-ui/react";

import { useEffect, useState, useRef, useContext } from "react";

import { MdOutlineUpload, MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md"
import Swal from 'sweetalert2'
import axios from "axios";
import Dropzone from 'react-dropzone';
import Gallery from "./Gallery";
import { FormContext } from "@/app/providers";
import { getCookie } from "cookies-next";

export default function DropImage({ title = "Agregar Evidencia: ", maxPhotos = -1, evidencename, pdf = false, sub = "", questionId = "na" }) {
  const user = getCookie('user');
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState(1);
  const [showPhoto, setShowPhoto] = useState(true);
  const [reference, setReference] = useState(null);
  let imgArray = [];
  const context = useContext(FormContext);
  const [filteredImages, setFilteredImages] = useState([]);
  const ref = useRef(null);



  const blink = () => {
    setShowPhoto(false);
    setTimeout(() => {
      setShowPhoto(true);
    }, 1);
  }

  const handleImages = (e) => {
    let count = 0;
    let tmpImages = [...images];
    let tmpArr = [...imgArray];
    try {
      if (maxPhotos != -1 && e.length > photos) {
        throw `No puedes agregar más de ${maxPhotos} archivos.`;
      }

      e.forEach((file) => {
        if (photos > 0 || maxPhotos == -1) {
          let url = URL.createObjectURL(file);
          tmpImages.push({ original: url, url: url });
          tmpArr.push(file);
        }
        count++;
      })
      setPhotos(photos - count);
      setImages(tmpImages);
      imgArray = tmpArr;
      uploadToServer(tmpArr);
      //updateImagesFromServer();



    }
    catch (e) {
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
  const updateImagesFromServer = () => {
    let counter = 0;
    const imagesFromContext = context.images || [];
    const imgScreen = [];
    const filtered = imagesFromContext.filter(image => image.image_id.startsWith(questionId));
    filtered.map((img) => {
      if (img?.path !== "") {

        const realPath = img.path.replace("public", "/GreenMetric");

        /* fetch(realPath).then((res) => {
          imgScreen.push({ original: res.url });

        }); */
        //console.log(realPath);
        imgScreen.push({ original: realPath, url: realPath });
        counter++;

      }
    })
    setTimeout(() => {
      setPhotos(maxPhotos - counter);
      setImages(imgScreen)

    }, 10);
  }

  const deletePhoto = async(e) => {
    const index = reference?.current?.getCurrentIndex();
    let urlDeleted;
    const deletedList = images.filter((item, i) => {
      if (i !== index) {
        return item;
      }
      else {
        urlDeleted = item?.url;
        return;
      }
    });

    if (urlDeleted) {
      const dependency = JSON.parse(user).dependency_id;
      setImages(deletedList);
      const regex = /\/([^/]+)$/; // Expresión regular
      const match = urlDeleted.match(regex);
      const route = `/GreenMetric/api/image/${dependency}/${questionId}/${match[1]}`;
      setPhotos(photos + 1);
      axios.post(route);
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

    if (!node?.className.includes("hover-container")) {
      node.className = `${classN} hover-container`;
    }

  }
  const disableHover = () => {
    let node = ref?.current;
    node.className = `drop-container ${images?.length == 0 ? "" : "hide-container"}`;
  }


  const uploadToServer = (arr) => {


    let form = new FormData();

    arr.forEach((img, index) => {
      form.append(`file${index}`, img);
    })
    form.append("id", questionId);
    axios.post("/GreenMetric/api/upload", form);
    


  };


  useEffect(() => {
    updateImagesFromServer();
    
  }, []);


  return (
    <>
      {showPhoto &&
        <Stack direction={"column"} className="grid-center" spacing={"30px 0"} >
          <div className="drop-title">
            <h3 className="blue">{`${title} `}</h3>
            {photos > 0 && <h3 className="red">({photos})</h3>}
          </div>
          <Dropzone onDrop={handleImages} multiple={true} onDragEnter={enableHover} onDragLeave={disableHover} >{/* accept={{ "image/*": ["*.*", ".pdf"] }} */}
            {({ getRootProps, getInputProps }) => (
              <section className="carousel-row">
                {images?.length > 1 ? <Icon as={MdOutlineSkipPrevious} className="icon-hover" onClick={prev} role="button" /> : <div></div>}
                <div {...getRootProps()} className="drag-and-drop">
                  <div ref={ref} className={`drop-container ${images?.length == 0 ? "" : "hide-container"}`} role="button" >
                    <div className="head">
                      <Text>{sub}</Text>
                      <div className="icon">
                        <MdOutlineUpload className="icon" />
                      </div>
                    </div>
                    <p>Seleccione un archivo o arrástrelo aquí
                      <br />
                      {<sub>Compatible (imágenes {pdf && "y pdf"})</sub>}
                    </p>

                  </div>
                  <Gallery images={images} setReference={setReference} />
                  <Input {...getInputProps()} />
                </div>
                {images?.length > 1 ? <Icon as={MdOutlineSkipNext} className="icon-hover" onClick={next} role="button" /> : <div></div>}

                <div className="delete-top-right">
                  <span role="button" onClick={deletePhoto} ><p>x</p></span>
                </div>
              </section>
            )}
          </Dropzone>
        </Stack>}
    </>
  )
}