import React, { useState } from "react";
import {convertBinary, copyText} from "../Helpers/Helpers";

class InputScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', output: '--'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        var binConvert = convertBinary(this.state.value);
        copyText(binConvert);
        this.setState({output: binConvert});
        alert('A name was submitted: ' + binConvert);
        event.preventDefault();
    }
  
    render() {
      return (
        <form class="App-header" onSubmit={this.handleSubmit}>
          <h1 class="calc-header">Convert to Binary:</h1>
          <textarea class="inputField" value={this.state.value} onChange={this.handleChange} cols="40" rows="5"></textarea>
          <button type="submit" class="submitButton">Submit</button>
          <h3 class="outputField">{this.state.output}</h3>
          <a class="infoSection">{this.state.output !== '--' ? "Copied to clipboard!": "Please make an entry above."}</a>
        </form>
      );
    }
  }

  export default InputScreen;