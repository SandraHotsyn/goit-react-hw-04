import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      largeSrc: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
