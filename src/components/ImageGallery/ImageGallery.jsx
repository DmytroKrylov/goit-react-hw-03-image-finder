import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getImg } from '../../services/get';

class ImageGallery extends Component {
  state = {};

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.searchImg !== this.props.searchImg) {
      getImg(this.props.searchImg);
    }
  };

  render() {
    return (
      <div>
        <ul className="gallery">
          <ImageGalleryItem />
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
