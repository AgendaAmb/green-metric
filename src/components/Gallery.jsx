"use client";
import ImageGallery from "react-image-gallery";
import "next/image";
import { useEffect, useRef } from "react";
export default function Gallery({ images, setReference, }) {
    const ref_ = useRef(null)
    useEffect(() => {
        if (setReference) {
            setReference(ref_);
        };
    }, [ref_])
    return <ImageGallery items={images} useBrowserFullscreen={false} showFullscreenButton={false} showPlayButton={false} autoPlay={false} showNav={false} ref={ref_} />


}
