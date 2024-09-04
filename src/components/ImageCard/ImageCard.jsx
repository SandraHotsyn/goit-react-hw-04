import PropTypes from "prop-types";

export default function ImageCard({ src, alt }) {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
