import './css/Letter.css';
function Letter({ show, onUnfold }) {
  return (
    <div className={`letter-container ${show ? "show" : ""}`}>

        <div className="letter">
          <p>A special message is waiting for you...</p>
          <p className="letter-preview">
            I have something I want to tell you on your special day.
          </p>

          <button type="button" onClick={onUnfold}>
            Unfold
          </button>
        </div>
      </div>

  );
}

export default Letter;