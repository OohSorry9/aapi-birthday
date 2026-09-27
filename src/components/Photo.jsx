function Photo({ image, index, onImageClick }) {
    return (
        <div className={`photo-card photo-${index + 1}`}>
            <img
                src={image}
                alt={`Birthday photo ${index + 1}`}
                role="button"
                tabIndex={0}
                aria-label={`Enlarge birthday photo ${index + 1}`}
                onClick={() => onImageClick(image)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onImageClick(image);
                    }
                }}
            />
        </div>
    )
}

export default Photo