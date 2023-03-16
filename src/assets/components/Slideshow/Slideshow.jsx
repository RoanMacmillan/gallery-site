import { useParams } from "react-router-dom";
import galleryData from "../../data.json";
import "./Slideshow.css";
import React, { useState } from "react";
import backBtn from '../../images/shared/icon-back-button.svg'
import fwdBtn from '../../images/shared/icon-next-button.svg'


const Slideshow = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));
  console.log(image);
  if (!image) {
    return <div>Image not found</div>;
  }

  const handleNext = () => {

  
  }

  const handlePrev = () => {


  }


  return (
    <div className="slideShow">
      <div className="heroTitleWrapper">
        <img
          src={image.images.hero.small}
          alt={image.name}
          className="hero"
        ></img>
        <div className="heroBtnWrapper">
          <button
            className="modalBtn"
            type="button"
            onClick={() => setShowModal(true)}
          >view image
          </button>
        </div>
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
      <div className="descripWrapper">
      <p className="descrip">{image.description}</p>
      </div>
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

<div className="navigationContainer">

  <div className="navigationTitle">
  <h2>{image.name}</h2>
          <p>{image.artist.name}</p>


  </div>

<div className="navigationButtons">
        <button onClick={handlePrev}><img src={backBtn} alt='back button'></img></button>
        <button onClick={handleNext}><img src={fwdBtn} alt='next button'></img></button>
      </div>

      </div>


    </div>
  );
};

export default Slideshow;
