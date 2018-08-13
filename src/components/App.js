import React, { Component } from 'react';
import './App.css';
import News from './News/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to News Feed</h1>
        </header>
        <News info={'everything?q=bitcoin'}/>
        <hr/>
        <News info={'top-headlines?country=us&category=business'}/>
      </div>
    );
  }
}

export default App;
