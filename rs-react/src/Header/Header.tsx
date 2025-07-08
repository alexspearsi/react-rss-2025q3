import './Header.css';
import { Component } from 'react';

type HeaderProps = {
  onSearchChange: (value: string) => void;
};

type HeaderState = {
  inputValue: string;
};

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSearchClick = () => {
    this.props.onSearchChange(this.state.inputValue);
  };

  render() {
    return (
      <header className="header">
        <input
          type="text"
          className="header__input"
          placeholder="Search by name..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button className="header__button" onClick={this.handleSearchClick}>
          Search
        </button>
      </header>
    );
  }
}

export default Header;
