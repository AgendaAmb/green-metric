import ImageGallery from "react-image-gallery";

export default function Gallery({ images }) {
    return images.length > 0 ? (
        <ImageGallery items={images} />
    ) : (
        <ImageGallery items={[{ original: "/noasnd" }]} />
    );
}
