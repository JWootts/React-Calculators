import React from "react";
import {convertBinary, copyText, convertBinaryToText, CalcTypes} from "../Helpers/Helpers";

class InputScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'input', output: 'output', calcType: CalcTypes[0]};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleCalcChange = this.handleCalcChange.bind(this);
      this.handleInitClick = this.handleInitClick.bind(this);
    }
    
    handleInitClick(event) {
        this.setState({value: event.target.value == 'input' ? '' : this.state.value, output: event.target.value == 'output' ? '' : this.state.output});
        event.preventDefault();
    }

    handleCalcChange(event, name) {
        this.setState({calcType: name});
        console.log(name)
        event.preventDefault();
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleClear(event) {
        this.setState({value: 'input', output: 'output', calcType: this.state.calcType});
        event.preventDefault();
    }
  
    handleSubmit(event) {
        var binConvert = this.state.calcType === 'Text to Binary'? convertBinary(this.state.value) : convertBinaryToText(this.state.value);
        copyText(binConvert);
        this.setState({output: binConvert});
        event.preventDefault();
    }
  
    render() {
      return (
        <form class="App-header">

         <div>{CalcTypes.map((c) =>(
              <button onClick={e => this.handleCalcChange(e, c)} class="calc-buttons">{c}</button>
          ))}</div>

          <h1 class="calc-header">{this.state.calcType}</h1>
          <textarea class="inputField" value={this.state.value} onClick={this.handleInitClick} onChange={this.handleChange} cols="40" rows="5"></textarea>
          <textarea class="inputField" value={this.state.output} onClick={this.handleInitClick} onChange={this.handleChange} cols="40" rows="5"></textarea>
          <button onClick={this.handleSubmit} class="submitButton">Submit</button>
          <button onClick={this.handleClear} class="submitButton">Clear</button>

          <a class="infoSection">{this.state.output !== '--' ? "Copied to clipboard!": "Please make an entry above."}</a>
        </form>
      );
    }
  }

  export default InputScreen;