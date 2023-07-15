import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImg } from '../../services/getimg';
import Button from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    img: null,
    page: 1,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.searchImg !== this.props.searchImg) {
      try {
        const imgData = await getImg(this.props.searchImg, this.state.page);
        this.setState({ img: imgData });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  loadMoreImages = async () => {
    try {
      const nextPage = this.state.page + 1;
      const imgData = await getImg(this.props.searchImg, nextPage);
      this.setState(prevState => ({
        img: [...prevState.img, ...imgData],
        page: nextPage,
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    const { img } = this.state;
    const showButton = img && img.length > 0;

    return (
      <div>
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
        <Button showButton={showButton} onClick={this.loadMoreImages} />
      </div>
    );
  }
}

export default ImageGallery;
