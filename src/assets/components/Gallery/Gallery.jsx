import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import galleryData from "../../data.json";

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll(".galleryItem");
    let delay = .5;
    galleryItems.forEach((item) => {
      item.style.animationDelay = delay + "s";
      delay += 0.35;
    });
  }, []);

  return (
    <main>
      <div className="gallery" ref={galleryRef}>
        {galleryData.map((item) => (
          <div className="galleryItem" key={item.name}>
            <div className="gradientWrapper"></div>
            <img src={item.images.thumbnail} alt={item.name} />
            <div className="textContainer">
              <h2>{item.name}</h2>
              <p>{item.artist.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;

