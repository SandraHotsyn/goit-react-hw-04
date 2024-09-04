import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard"; // Використовуємо ImageCard для відображення окремої картки

export default function ImageGallery({ images }) {
  // Галерея рендериться лише тоді, коли є завантажені зображення
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

// Валідація пропсів
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
