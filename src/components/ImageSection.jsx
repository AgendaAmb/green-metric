import { Select, VStack, Stack, StackDivider } from "@chakra-ui/react";
import { useState } from "react";
import Uploader from "./FileUploader";
import Gallery from "./Gallery";

export default function ImageSection({ title, classes }) {
    const [images, setImages] = useState([]);

    return (
        <div>
            <Stack>
                <h3 className="grid-center">{title}</h3>
                <Uploader setImages={setImages} images={images} />
                <div className="image-container gallery-300">
                    <div className="self-center">
                        <Gallery images={images} />
                    </div>
                </div>
            </Stack>
        </div>
    );
}
