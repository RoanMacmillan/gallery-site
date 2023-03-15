import React from "react";
import { useParams, Link } from "react-router-dom";
import galleryData from "../../data.json";

const Slideshow = () => {
  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <Link to="/">
        <button>Back to gallery</button>
      </Link>

      <p>Artist: {image.artist.name}</p>

    </div>
  );
};

export default Slideshow;
