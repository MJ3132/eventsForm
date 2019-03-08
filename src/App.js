import React, { Component } from 'react';
import './scss/components/app.scss';
import NavBar from "./components/navbar";
import AppBody from "./components/appbody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppBody />
      </div>
    );
  }
}

export default App;
