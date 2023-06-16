import ImageGallery from "react-image-gallery";
import Image from "next/image";
export default function Gallery({ images }) {
    return images.length > 0 ? (
        <ImageGallery items={images} useBrowserFullscreen={false} />
    ) : (
        <ImageGallery
            items={[{ original: "/no-image.jpg" }]}
            useBrowserFullscreen={false}
        />
    );
}
