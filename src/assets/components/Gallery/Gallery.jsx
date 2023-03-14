import React from "react";
import "./Gallery.css";
import galleryData from "../../data.json";


const Gallery = () => {
  return (
    <main>
      <div className="gallery">
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
