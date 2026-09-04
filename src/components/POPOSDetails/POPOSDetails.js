// src/POPOSDetails.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../sfpopos-data.json';

import styles from './POPOSDetails.modules.css';

function POPOSDetails(props) {
  const { id } = useParams();
  const spaceIndex = parseInt(id);
  const space = data[spaceIndex];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!space) {
    return <div>Space not found</div>;
  }

  const { title, address, hours, description, images } = space;

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.POPOSDetails}>
      <h1>{title}</h1>
      <p>{address}</p>
      <p>{hours}</p>

      <div className={styles.slideshow}>
        <img src={`${process.env.PUBLIC_URL}/images/${images[currentImageIndex]}`} alt={title} />
        <button onClick={prevImage}>Previous</button>
        <span>{currentImageIndex + 1} / {images.length}</span>
        <button onClick={nextImage}>Next</button>
      </div>

      
      
      <p>{description}</p>
    </div>
  );
}

export default POPOSDetails;