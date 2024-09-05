import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div className={css.imageCard}>
      <img src={src} alt={alt} />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
