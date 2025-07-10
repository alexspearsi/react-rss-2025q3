import './Header.css';
import { Component } from 'react';

type HeaderProps = {
  onSearchSubmit: (query: string) => void;
};

type HeaderState = {
  inputValue: string;
};

export class Header extends Component<HeaderProps, HeaderState> {
  state = {
    inputValue: localStorage.getItem('query') || '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = this.state.inputValue;
    this.props.onSearchSubmit(query);
  };

  render() {
    return (
      <header className="header">
        <form className="header__form" onSubmit={this.handleSearchClick}>
          <input
            type="text"
            className="header__input"
            placeholder={'Search by name...'}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <button className="header__button">Search</button>
        </form>
      </header>
    );
  }
}
