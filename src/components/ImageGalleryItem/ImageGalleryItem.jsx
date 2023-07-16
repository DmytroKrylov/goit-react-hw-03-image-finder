import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItem_image}
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
