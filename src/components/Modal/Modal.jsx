import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, altText } = this.props;

    return (
      <div className={styles.overlay} onClick={this.handleOverlayClick}>
        <div className={styles.modal}>
          <img src={imageUrl} alt={altText} />
        </div>
      </div>
    );
  }
}

export default Modal;
