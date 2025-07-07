import './Header.css';
import { Component } from 'react';

type HeaderProps = {
  onSearchChange: (value: string) => void;
};

class Header extends Component<HeaderProps> {
  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (
      <header className="header">
        <input
          type="text"
          className="header__input"
          placeholder="Search by name..."
          onChange={this.handleInput}
        ></input>
        <button className="header__button">Search</button>
      </header>
    );
  }
}

export default Header;
