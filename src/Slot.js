function Slot({ imageUrl, title, description }) {
  return (
    // <div className="card-gpt card-gpt-slot">
      <div className="card-gpt">
        <img src={imageUrl} alt={title} />
        <div className="card-gpt-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    // </div>
  );
}

export default Slot;
