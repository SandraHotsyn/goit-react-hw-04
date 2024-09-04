import PropTypes from "prop-types";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
