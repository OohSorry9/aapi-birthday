import { useEffect, useState } from "react";
import Cake from "./Cake";
import Balloons from "./Balloons";
import "./css/FinalCard.css";

const GREETING = "Happy Birthday,";

function FinalCard() {
  const [typedGreeting, setTypedGreeting] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < GREETING.length) {
        setTypedGreeting(GREETING.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(typing);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <>



      <Balloons count={15} />
      <div className="final-card-container">
        <h1 className="greeting">
          {typedGreeting}
          {showCursor && <span className="typewriter-cursor" />}
        </h1>

        <h2 className="name">Aapi</h2>

        <p className="wish-message">
          Happy birthday to the best sister and partner in crime, May Allah make ur future bright   and give u all the happiness that u deserve. cant wait to see you again 🥲
        </p>
        <span style={{ fontSize: "0.8rem", color: "#555" }}>
          (you can click the photos)
        </span>

        <Cake />
      </div>
      </>
  );
}

export default FinalCard;