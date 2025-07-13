import './App.css';
import { Component } from 'react';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Spinner } from './components/Spinner/Spinner';
import type { Character } from './types/character';

type AppState = {
  characters: Character[];
  searchQuery: string;
  isLoading: boolean;
};

export class App extends Component<object, AppState> {
  state = {
    characters: [],
    searchQuery: '',
    isLoading: false,
  };

  async fetchCharacters(searchQuery: string) {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
      );
      const data = await response.json();
      this.setState({ characters: data.results || [], isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ characters: [], isLoading: false });
    }
  }

  async componentDidMount() {
    const queryFromStorage = localStorage.getItem('query') || '';
    this.setState({ searchQuery: queryFromStorage });
    await this.fetchCharacters(queryFromStorage);
  }

  handleSearchSubmit = (query: string) => {
    localStorage.setItem('query', query);
    this.setState({ searchQuery: query }, () => {
      this.fetchCharacters(query);
    });
  };

  render() {
    const { characters, isLoading } = this.state;

    return (
      <>
        <Header onSearchSubmit={this.handleSearchSubmit} />
        <Main>
          {isLoading ? (
            <Spinner />
          ) : (
            characters.map((character, index) => (
              <Card key={index} character={character} />
            ))
          )}
        </Main>
      </>
    );
  }
}
