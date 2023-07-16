import { Component } from 'react';
import styles from './Searchbar.module.css';

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
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.value}
          />

          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
