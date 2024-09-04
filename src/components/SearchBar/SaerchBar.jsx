import { useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Будь ласка, введіть текст для пошуку зображень.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
}

// Валідація пропсів
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
