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

  async componentDidMount() {
    this.setState({ isLoading: true });
    const characters: Character[] = [];

    for (let i = 1; i <= 24; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}&page=${i}`
      );
      const data = await response.json();
      characters.push(...data.results);
    }

    this.setState({ characters: characters, isLoading: false });
  }

  handleSearchChange = (value: string) => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { characters, searchQuery, isLoading } = this.state;
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <>
        <Header onSearchChange={this.handleSearchChange} />
        <Main>
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            filtered.map((character, index) => (
              <Card key={index} character={character} />
            ))
          )}
        </Main>
      </>
    );
  }
}

export default App;
