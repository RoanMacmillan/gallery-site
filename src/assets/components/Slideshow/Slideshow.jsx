import { useParams } from "react-router-dom";
import galleryData from "../../data.json";
import "./Slideshow.css";
import React, { useState } from "react";

const Slideshow = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));
  console.log(image);
  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="slideShow">
      <div className="heroTitleWrapper">
        <img
          src={image.images.hero.small}
          alt={image.name}
          className="hero"
        ></img>
        <button
          className="modalBtn"
          type="button"
          onClick={() => setShowModal(true)}
        >
          view image
        </button>
        <div className="artistLabel">
          <h1>{image.name}</h1>
          <p>{image.artist.name}</p>
        </div>
      </div>
      <img
        src={image.artist.image}
        alt={image.artist.name}
        className="portrait"
      />
      <p className="descrip">{image.description}</p>
      <a href={image.source}>Go to source</a>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img src={image.images.gallery} alt={image.name} />
            <button
              className="closeBtn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
