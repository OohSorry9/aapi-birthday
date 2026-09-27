import { useMemo } from "react";
import "./css/Balloons.css";

function Balloons({ count = 15 }) {
  const colors = ["#e94560", "#f0e68c", "#00d8d6", "#8e44ad", "#3498db"];

  const balloons = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}vw`,
        duration: `${Math.random() * 6 + 8}s`,
        delay: `${Math.random() * 5}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
      })),
    [count]
  );

  return (
    <>
      {balloons.map((balloon) => (
        <div
          className="balloon"
          key={balloon.id}
          style={{
            left: balloon.left,
            animationDuration: balloon.duration,
            animationDelay: balloon.delay,
            backgroundColor: balloon.color,
          }}
        />
      ))}
    </>
  );
}

export default Balloons;