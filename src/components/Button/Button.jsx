import { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { showButton } = this.props;
    return showButton && <button onClick={this.handleClick}>Load more</button>;
  }
}

export default Button;
