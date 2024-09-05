import { useState } from "react";
import axios from "axios";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SaerchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const ACCESS_KEY = "uOtpw1R7SsoB0yZ08HNhfcyrTtcAK0tCFt3-ofDRB3Q";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchImages = async (query, page) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: query,
            page: page,
            per_page: 12,
            client_id: ACCESS_KEY,
          },
        }
      );

      const fetchedImages = response.data.results.map((image) => ({
        id: image.id,
        src: image.urls.small,
        alt: image.alt_description,
        largeSrc: image.urls.full,
      }));

      setImages((prevImages) =>
        page === 1 ? fetchedImages : [...prevImages, ...fetchedImages]
      );
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Не вдалося завантажити зображення. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    fetchImages(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(searchQuery, nextPage);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={selectedImage.largeSrc}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
}
