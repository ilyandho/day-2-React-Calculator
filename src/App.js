import React, { Component } from "react";
import "./App.css";

import Header from "./componets/Header/Header";
import Container from "./componets/Container/Container";
import Footer from "./componets/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
