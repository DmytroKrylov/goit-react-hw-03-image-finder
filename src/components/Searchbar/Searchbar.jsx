import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.value}
          />

          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
