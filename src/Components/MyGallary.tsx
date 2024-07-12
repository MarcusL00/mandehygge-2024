import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"; // Import ImageGallery styles

const images: ReactImageGalleryItem[] = [
  {
    original: "./druk.jpg",
    thumbnail: "./druk.jpg",
  },
  {
    original: "./Druk2.png",
    thumbnail: "./Druk2.png",
  },
  {
    original: "./druk3.png",
    thumbnail: "./druk3.png",
  },
  {
    original: "./druk4.jpg",
    thumbnail: "./druk4.jpg",
  },
  {
    original: "./druk5.png",
    thumbnail: "./druk5.png",
  },
];

const MyGallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <ImageGallery items={images} />
    </div>
  );
};

export default MyGallery;
