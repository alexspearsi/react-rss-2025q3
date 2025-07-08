import './App.css';
import { Component } from 'react';
import Main from './Main/Main';
import Header from './Header/Header';
import Card from './Card/Card';
import type { Character } from './types/character';

type AppState = {
  characters: Character[];
  searchQuery: string;
  isLoading: boolean;
};

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      characters: [],
      searchQuery: '',
      isLoading: false,
    };
  }

  async fetchCharacters(searchQuery: string) {
    const characters = [];
    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
      );
      const data = await response.json();
      characters.push(...data.results);

      this.setState({ characters, isLoading: false });
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
            <div className="spinner"></div>
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

export default App;
