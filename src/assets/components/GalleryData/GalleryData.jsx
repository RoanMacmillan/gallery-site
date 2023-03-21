import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import galleryData from "../../data.json";

const useGalleryData = () => {
  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));

  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const images = galleryData.filter(
      (item) => item.gallery === image.gallery
    );
    setGalleryImages(images);
  }, [image]);

  return {
    image,
    galleryImages,
  };
};

export default useGalleryData;