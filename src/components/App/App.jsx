import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SaerchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Стан для сторінки пагінації

  const handleSearch = (query) => {
    console.log("Пошуковий запит:", query);
    setIsLoading(true);
    setError(null); // Очищаємо попередню помилку
    setPage(1); // Скидаємо сторінку при новому пошуку

    // Симуляція HTTP-запиту із затримкою
    setTimeout(() => {
      const randomError = Math.random() > 0.5;
      if (randomError) {
        setError("Не вдалося завантажити зображення. Спробуйте ще раз.");
        setIsLoading(false);
        return;
      }

      // Приклад завантажених зображень
      const fetchedImages = [
        { id: "1", src: "path/to/image1.jpg", alt: "Image 1" },
        { id: "2", src: "path/to/image2.jpg", alt: "Image 2" },
        { id: "3", src: "path/to/image3.jpg", alt: "Image 3" },
      ];

      setImages(fetchedImages);
      setIsLoading(false);
    }, 2000); // Затримка 2 секунди для імітації запиту
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setError(null); // Очищаємо попередню помилку
    const nextPage = page + 1; // Збільшуємо сторінку на 1

    // Симуляція завантаження додаткових зображень
    setTimeout(() => {
      const fetchedImages = [
        { id: nextPage + "1", src: "path/to/image1.jpg", alt: "Image 1" },
        { id: nextPage + "2", src: "path/to/image2.jpg", alt: "Image 2" },
        { id: nextPage + "3", src: "path/to/image3.jpg", alt: "Image 3" },
      ];

      setImages((prevImages) => [...prevImages, ...fetchedImages]);
      setPage(nextPage); // Оновлюємо номер сторінки
      setIsLoading(false); // Завантаження завершено
    }, 2000); // Затримка 2 секунди для імітації запиту
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} />
          {isLoading && <Loader />}{" "}
          {/* Показуємо Loader, якщо йде завантаження */}
          {images.length > 0 && !isLoading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}{" "}
          {/* Показуємо кнопку, якщо є зображення */}
        </>
      )}
    </div>
  );
}
