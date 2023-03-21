import { useFetcher, useParams } from "react-router-dom";
import galleryData from "../../data.json";
import "./Slideshow.css";
import React, { useEffect, useState, useRef } from "react";
import backBtn from "../../images/shared/icon-back-button.svg";
import fwdBtn from "../../images/shared/icon-next-button.svg";
import enlargeIcon from "../../images/shared/icon-view-image.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ProgressBar from "../ProgressBar/ProgressBar";

const Slideshow = () => {
  const [showModal, setShowModal] = useState(false);
  const nodeRef = useRef(null);
  // gets id from url using useParams hook
  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  // Filter the galleryData to get an array of images to display in the slideshow
  const images = galleryData.filter((item) => item.gallery === image.gallery);

  // State variable to keep track of the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(
    images.findIndex((item) => item.id === image.id)
  );

  // goes back in slideshow
  const prevImage = () =>
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  // goes forward
  const nextImage = () =>
    setCurrentImageIndex((currentImageIndex + 1) % images.length);

  // keeps track of slideshow progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(((currentImageIndex + 1) / images.length) * 100);
  }, [currentImageIndex, images]);


  return (
    <div className="slideShow">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentImageIndex}
          nodeRef={nodeRef}
          timeout={0} // Adjust this value to control the duration of the transition
          classNames="slide"
          unmountOnExit
        >
          <div className="desktopWrapper">
            <div className="heroTitleWrapper">
              <img
                src={images[currentImageIndex].images.hero.small}
                alt={images[currentImageIndex].name}
                className="hero"
              ></img>
              <img
                src={images[currentImageIndex].images.hero.large}
                alt={images[currentImageIndex].name}
                className="heroLarge"
              ></img>

              <div className="heroBtnWrapper">
                <button
                  className="modalBtn"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <img src={enlargeIcon} alt="View image icon" />
                  view image
                </button>
              </div>
              <div className="artistLabel">
                <h1>{images[currentImageIndex].name}</h1>
                <p>{images[currentImageIndex].artist.name}</p>
              </div>
              <img
                src={images[currentImageIndex].artist.image}
                alt={images[currentImageIndex].artist.name}
                className="portrait"
              />
            </div>

            <div className="rightContainer">
              <div className="descripWrapper">
                <p className="descrip">
                  {images[currentImageIndex].description}
                </p>
                <p className="bigText">{images[currentImageIndex].year}</p>
              </div>
              <a className="sourceLink" href={images[currentImageIndex].source}>
                Go to source
              </a>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>

      {/* displays a modal when hero image is clicked */}
      <CSSTransition
        in={showModal}
        nodeRef={nodeRef}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        {/* {showModal && ( */}
        {/* // handles closing modal when clicking outside */}
        <div
          className="modal"
          ref={nodeRef}
          onClick={() => setShowModal(false)}
        >
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].images.gallery}
              alt={images[currentImageIndex].name}
            />
            <button
              className="closeBtn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>

        {/* )} */}
      </CSSTransition>

      <div className="navigationContainer">
        {/* <div className="progressBar" style={{ width: `${progress}%` }}></div> */}
        <ProgressBar currentImageIndex={currentImageIndex} images={images} />
        <div className="emptyBar"></div>
        <div className="navigationTitle">
          <h2>{images[currentImageIndex].name}</h2>
          <p>{images[currentImageIndex].artist.name}</p>
        </div>

        <div className="navigationButtons">
          <button onClick={prevImage}>
            <img src={backBtn} alt="back button"></img>
          </button>
          <button onClick={nextImage}>
            <img src={fwdBtn} alt="next button"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
