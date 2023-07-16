import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { showButton } = this.props;
    return (
      showButton && (
        <div className={styles.button_center}>
          <button className={styles.button} onClick={this.handleClick}>
            Load more
          </button>
        </div>
      )
    );
  }
}

export default Button;
