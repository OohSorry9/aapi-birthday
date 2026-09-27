import { useEffect } from "react";
import "./css/ImageLightbox.css";

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflowY = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="image-lightbox-backdrop" onClick={onClose}>
      <div
        className="image-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged birthday photo"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="image-lightbox-close" type="button" onClick={onClose}>
          Close
        </button>
        <img className="image-lightbox-image" src={image} alt="Enlarged birthday photo" />
      </div>
    </div>
  );
}

export default ImageLightbox;