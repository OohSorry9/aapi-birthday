function Envelope({ isOpen, onOpen }) {
  return (
    <div
      className={`envelope-container ${isOpen ? "open" : ""}`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onOpen();
      }}
      aria-label="Open birthday envelope"
    >
      <div className="envelope">
        <div className="envelope-back" />
        <div className="envelope-front" />
        <div className="envelope-flap" />
        <div className="envelope-seal" />
      </div>
    </div>
  );
}

export default Envelope;