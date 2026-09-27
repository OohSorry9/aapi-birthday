import './css/Cake.css';

function Cake() {
  return (
    <div className="cake" aria-label="Birthday cake">
      <div className="plate" />
      <div className="layer layer-bottom" />
      <div className="layer layer-middle" />
      <div className="layer layer-top" />
      <div className="icing" />
      <div className="drip drip2" />

      <div className="candle">
        <div className="flame" />
      </div>
    </div>
  );
}

export default Cake;