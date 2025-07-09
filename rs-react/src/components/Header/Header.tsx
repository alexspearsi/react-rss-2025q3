import './Header.css';
import { Component } from 'react';

type HeaderProps = {
  onSearchSubmit: (query: string) => void;
};

type HeaderState = {
  inputValue: string;
};

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('query') || '',
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = this.state.inputValue;
    this.props.onSearchSubmit(query);
  };

  queryFromLS = () => {
    return localStorage.getItem('query')
      ? localStorage.getItem('query')
      : 'Search by name...';
  };

  render() {
    return (
      <header className="header">
        <form className="header__form" onSubmit={this.handleSearchClick}>
          <input
            type="text"
            className="header__input"
            placeholder={'Search by name...'}
            value={this.queryFromLS() && this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <button className="header__button">Search</button>
        </form>
      </header>
    );
  }
}

export default Header;
