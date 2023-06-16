import ImageGallery from "react-image-gallery";
import "next/image";
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
