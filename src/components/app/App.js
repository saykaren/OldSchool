import React, { Component, useState } from "react";
import oldSchoolData from "../Data/Data";
import "../styling/App.scss";
import Main from "./Main";

class App extends React.Component {
  componentDidMount(){
    this.setState({data: oldSchoolData})
  }
  render() {
    const { data } = this.state || {};
    const propSendingDown = "Hello I am here";
    return (
      <div className="App">
        <header className="App-header">
          Hello Missy
          {data && <Main dataProp={data} propSendingDown={propSendingDown}/>}
        </header>
      </div>
    );
  }
}

export default App;
