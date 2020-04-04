import React, { Component } from "react";

import "./App.css";

// Components
import Validate from "./ValidationComp/Validation";

class App extends Component {
  // State
  state = {
    input: "",
  };

  // change handlers
  inputLengthHandler = (event) => {
    // const inputLength = [...this.state.input.length]
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputLengthHandler} />
        {/* <p>The input length above is: {this.state.input.length}</p> */}

        <Validate inputLength={this.state.input.length} />
      </div>
    );
  }
}

export default App;
