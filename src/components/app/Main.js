import React, { Component } from "react";

class Main extends Component {
  render() {
    const { dataProp } = this.props;

    console.log({ dataProp });
    return (
      <div>
        Data here:
        {dataProp &&
          dataProp.map((nintendo, index) => (
            <div key={index}>
              {nintendo.nintendoNumber}: {nintendo.gameName}
            </div>
          ))}
      </div>
    );
  }
}

export default Main;
