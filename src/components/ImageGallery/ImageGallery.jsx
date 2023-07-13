import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getImg } from '../../services/getimg';

class ImageGallery extends Component {
  state = {
    img: null,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.searchImg !== this.props.searchImg) {
      try {
        const imgData = await getImg(this.props.searchImg);
        this.setState({ img: imgData });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  render() {
    const { img } = this.state;
    return (
      <ul className="gallery">
        {img &&
          img.map(img => (
            <ImageGalleryItem
              key={img.id}
              src={img.webformatURL}
              alt={img.id}
              largeImageURL={img.largeImageURL}
            />
          ))}
      </ul>
    );
  }
}
export default ImageGallery;
