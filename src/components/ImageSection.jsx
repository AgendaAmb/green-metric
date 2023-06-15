import { Select, VStack, Stack, StackDivider } from "@chakra-ui/react";
import { useState } from "react";
import Uploader from "./FileUploader";
import Gallery from "./Gallery";

export default function ImageSection({ title }) {
    const [images, setImages] = useState([]);

    return (
        <Stack className="grid-center">
            <h3>{title}</h3>
            <Uploader setImages={setImages} images={images} />
            <div className="gallery-300">
                <Gallery images={images} />
            </div>
        </Stack>
    );
}
