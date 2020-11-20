import React, { Component } from "react";

class Main extends Component {
  render() {
    const { dataProp } = this.props;

    console.log({ dataProp });
    return (
      <div className="dataList">
        {/* Data here:
        {dataProp &&
          dataProp.map((nintendo, index) => (
            <div key={index} className="dataItem">
              {nintendo.nintendoNumber}: {nintendo.gameName}
            </div>
          ))} */}
      </div>
    );
  }
}

export default Main;
