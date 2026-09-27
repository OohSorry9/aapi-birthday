import React from 'react'
import './css/Memories.css'
function Memories({ images, leftside, onImageClick }) {
    return (

        <div className="memory-layout" style = {!leftside ? { justifyContent: 'flex-start' } : {}}>
            <div className="side-photos left-photos" aria-label="Birthday memories">
                {images.map((image, index) => (
                    <div
                        className={`photo-card photo-${index + 1}`}
                        key={image}
                        style={leftside ? { transform: `rotate(${index === 0 ? 7 : -7}deg)` } : {}}
                    >
                        <img
                            src={image}
                            alt={`Birthday memory ${index + 1}`}
                            role="button"
                            tabIndex={0}
                            aria-label={`Enlarge birthday memory ${index + 1}`}
                            onClick={() => onImageClick(image)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    onImageClick(image);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
            )
        }

export default Memories