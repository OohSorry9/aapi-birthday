
import Photo from './Photo';
import './css/Photolane.css';
function Photolane({ images, onImageClick }) {
    return (
        <div className="photolane-layout">
            {images.map((image, index) => (
                <Photo image={image} index={index} onImageClick={onImageClick} key={image} />
            ))}
        </div>
    )
}

export default Photolane;