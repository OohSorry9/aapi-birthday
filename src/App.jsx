import { useEffect, useState, useRef } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import FinalCard from "./components/FinalCard";
import ImageLightbox from "./components/ImageLightbox";
import Memories from "./components/Memories";
import Photolane from "./components/Photolane";
import Volume from "./components/Volume";
import photo1 from "./images/1.jpg";
import photo2 from "./images/2.jpg";
import photo3 from "./images/3.jpg";
import photo4 from "./images/4.jpg";
import photo5 from "./images/5.jpg";
import photo6 from "./images/6.jpg";
import photo7 from "./images/7.jpg";
import photo8 from "./images/8.jpg";
import photo9 from "./images/9.jpg";

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

function App() {
  const [step, setStep] = useState(1);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterShow, setLetterShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);

  useEffect(() =>{

const audio = new Audio(`${import.meta.env.BASE_URL}audio/audio.mp3`);
    audio.preload = 'auto';
    audio.volume = 0.25;
    audio.loop = true;
    audioRef.current = audio;

  return () => {
    audio.pause();
    audio.src = "";
  };
}, []);

const increaseVolume = () => {
  if (audioRef.current) {
    audioRef.current.volume = Math.min(audioRef.current.volume + 0.1, 1);
  }
};

const decreaseVolume = () => {
  if (audioRef.current) {
    audioRef.current.volume = Math.max(audioRef.current.volume - 0.1, 0);
  }
}


  const openEnvelope = () => {
    if (envelopeOpen) return;

    setEnvelopeOpen(true);
    audioRef.current.play(); 

    // Same timing as the original site's flap animation.
    setTimeout(() => {
      setStep(2);

      setTimeout(() => {
        setLetterShow(true);
      }, 100);
    }, 700);
  };

  const unfoldLetter = () => {
    setStep(3);
  };

  return (
    <>
      {step === 1 && (
        <section className="step active">
          <Envelope isOpen={envelopeOpen} onOpen={openEnvelope} />
        </section>
      )}

      {step === 2 && (
        <section className="step active">
          <Letter show={letterShow} onUnfold={unfoldLetter} />
        </section>
      )}

      {step === 3 && (
        <section className="step active final-step">
          <Volume increaseVolume={increaseVolume} decreaseVolume={decreaseVolume} />
          <Photolane images={images.slice(4, 6)} onImageClick={setSelectedImage} />
          <div className="final-card-middle-section">
            <Memories images={images.slice(0, 2)} leftside={true} onImageClick={setSelectedImage} />
            <FinalCard />
            <Memories images={images.slice(2, 4)} leftside={false} onImageClick={setSelectedImage} />
          </div>
          <Photolane images={images.slice(6)} onImageClick={setSelectedImage} />
        </section>
      )}
      {selectedImage && (
        <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

export default App;