import PropTypes from "prop-types";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <p className={css.errorMessage}>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
