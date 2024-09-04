import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return <p className="error-message">{message}</p>;
}

// Валідація пропсів
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
