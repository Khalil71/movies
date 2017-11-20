import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {movies: []}
  componentDidMount() {
    this.getMovies();
    }
    getMovies = () => {
      fetch('/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
    }
  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {movies.length ? (
          <div>
            <h1>Movies</h1>
            <ul className="movies">
              {movies.map((movie, index) =>
                <li key={index}>
                  {movie}
                </li>
              )}
            </ul>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No movies :(</h1>
            <button
              className="more"
              onClick={this.getMovies}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
