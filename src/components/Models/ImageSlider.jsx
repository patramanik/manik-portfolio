/* -------------------------------------------------------------------------- */
/*  ImageSlider.jsx                                                            */
/* -------------------------------------------------------------------------- */
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

/**
 * Reusable image slider / carousel.
 *
 * Props
 * ───────────────────────────────────────────────────────────
 * images   : string[]   – required list of image URLs
 * height   : string     – Tailwind height class for the main image
 * showThumbs : boolean  – show thumbnail strip under the main image
 */
const ImageSlider = ({ images, height = "h-64", showThumbs = true }) => {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  /* keyboard left / right navigation */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* simple swipe support */
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const end = e.changedTouches[0].clientX;
    const diff = touchStart.current - end;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <>
      {/* Main image */}
      <div
        className={`relative w-full ${height} overflow-hidden rounded-lg`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-2 p-1 bg-black/40 text-white rounded-full hover:bg-black/60"
        >
          <MdChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-2 p-1 bg-black/40 text-white rounded-full hover:bg-black/60"
        >
          <MdChevronRight size={24} />
        </button>

        <img
          src={images[index]}
          alt={`slider-${index}`}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Thumbnails */}
      {showThumbs && images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto mt-3 pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`shrink-0 border-2 rounded-md ${
                i === index ? "border-purple-500" : "border-transparent"
              }`}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                className="w-20 h-14 object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.string,
  showThumbs: PropTypes.bool,
};

export default ImageSlider;
