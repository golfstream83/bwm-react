import React, { Component } from 'react';
import {Header} from "./shared/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        I am App Component
      </div>
    );
  }
}

export default App;
