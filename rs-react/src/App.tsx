import { Component } from 'react';
import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { Spinner } from './components/Spinner/Spinner';
import type { Character } from './types/character';
import { Header } from './components/Header/Header';

type AppState = {
  characters: Character[];
  searchQuery: string;
  isLoading: boolean;
  hasError: boolean;
};

export class App extends Component<object, AppState> {
  state = {
    characters: [],
    searchQuery: '',
    isLoading: false,
    hasError: false,
  };

  async fetchCharacters(searchQuery: string) {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
      );
      const data = await response.json();
      this.setState({ characters: data.results || [], isLoading: false });
    } catch {
      this.setState({ characters: [], isLoading: false });
    }
  }

  async componentDidMount() {
    const queryFromStorage = localStorage.getItem('query') || '';

    this.setState({ searchQuery: queryFromStorage });
    await this.fetchCharacters(queryFromStorage);
  }

  handleSearchSubmit = (query: string) => {
    localStorage.setItem('query', query.trim());
    this.setState({ searchQuery: query }, () => {
      this.fetchCharacters(query);
    });
  };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    const { characters, isLoading, hasError } = this.state;

    if (hasError) {
      throw new Error('The button was clicked');
    }

    return (
      <div>
        <Header onSearchSubmit={this.handleSearchSubmit} />
        <Main onErrorButtonClick={this.handleClick}>
          {isLoading ? (
            <Spinner />
          ) : (
            characters.map((character, index) => (
              <Card key={index} character={character} />
            ))
          )}
        </Main>
      </div>
    );
  }
}
