import React from 'react';
import './App.css';

import Header from './components/Header';
import Todolist from './components/Todolist';

class App extends React.Component {
  /**
   * Renders the component
   */
  render() {
    return (
      <div>
        <Header />
        <Todolist />
      </div>
    )
  }
}

export default App;
