import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchImg: '',
  };

  handleSearch = searchImg => {
    this.setState({ searchImg });
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchImg={this.state.searchImg} />
      </>
    );
  }
}

export default App;
