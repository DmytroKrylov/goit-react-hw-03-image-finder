import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { getImg } from '../../services/getimg';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { searchImg } = this.props;
      const { page } = this.state;
      const imagesData = await getImg(searchImg, page);
      this.setState({ images: imagesData });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { searchImg } = this.props;
      const nextPage = this.state.page + 1;
      const imagesData = await getImg(searchImg, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesData],
        page: nextPage,
      }));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = selectedImage => {
    this.setState({ selectedImage });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className={styles.imageGallery_top}>
        <ul className={styles.imageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(image)}
            />
          ))}
        </ul>
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            showButton={images.length > 0}
            onClick={this.loadMoreImages}
          />
        )}

        {selectedImage && (
          <Modal
            imageUrl={selectedImage.largeImageURL}
            altText={selectedImage.tags}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGallery;
