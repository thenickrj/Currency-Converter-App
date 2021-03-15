import React, { Component } from "react";
import ReactDOM from "react-dom";
import CurrencyConverter from "./components/CurrencyConverter";

class App extends Component {
  render() {
    return <CurrencyConverter />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
