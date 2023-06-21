import ImageGallery from "react-image-gallery";
import "next/image";
export default function Gallery({ images }) {
    return images.length > 0 ? (
        <ImageGallery items={images} useBrowserFullscreen={false} showFullscreenButton={false}
        showPlayButton={false} autoPlay={true}/>
    ) : (
        <ImageGallery
            items={[{ original: "/no-image.jpg" }]}
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            showPlayButton={false}
            
        />
    );
}
