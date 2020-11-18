import React, { Component, useState } from "react";
import oldSchoolData from "../Data/Data";
import "../styling/App.scss";
import Main from "./Main";
import Searchable from "./Searchable";

class App extends React.Component {
  componentDidMount() {
    this.setState({ data: oldSchoolData });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Old School Nintendo Game System
         </header>
         <section>
         <Searchable/>
         </section>
      </div>
    );
  }
}

export default App;
