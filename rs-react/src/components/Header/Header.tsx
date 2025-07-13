import './Header.css';
import { Component } from 'react';
import { Button } from '../Button/Button';

type Props = {
  onSearchSubmit: (query: string) => void;
};

type State = {
  inputValue: string;
};

export class Header extends Component<Props, State> {
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
          <Button className={'header__button'}>Search</Button>
        </form>
      </header>
    );
  }
}
