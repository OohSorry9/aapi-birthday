import './css/Volume.css';



function Volume({ increaseVolume, decreaseVolume }) {
    return(

        <div className="volume-container">
            Volume
            <div className="volume-buttons">
            <button onClick={increaseVolume}>+</button>
            <button onClick={decreaseVolume}>-</button>
            </div>

    
    </div>

    )
}

export default Volume