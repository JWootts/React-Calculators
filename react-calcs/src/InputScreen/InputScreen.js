import React from "react";
import {handleCalcSelection, copyText, CalcTypes} from "../Helpers/Helpers";

class InputScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'input', output: 'output', calcType: CalcTypes[0], copyClip: true};
      this.handleChange = this.handleChange.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleCalcChange = this.handleCalcChange.bind(this);
      this.handleInitClick = this.handleInitClick.bind(this);
      this.handleClipChange = this.handleClipChange.bind(this);
    }
    
    handleInitClick(event) {
        this.setState({value: event.target.value === 'input' ? '' : this.state.value, output: event.target.value === 'output' ? '' : this.state.output});
        event.preventDefault();
    }

    handleCalcChange(event, name) {
        this.handleClear(event);
        this.setState({calcType: name});
        event.preventDefault();
    }

    handleChange(event) {
      var binConvert = handleCalcSelection(this.state.calcType, event.target.value);
      this.setState({value: event.target.value, output: binConvert});
      if(this.state.copyClip)
        copyText(binConvert);
      event.preventDefault();
    }

    handleClear(event) {
        this.setState({value: 'input', output: 'output', calcType: this.state.calcType});
        event.preventDefault();
    }

    handleClipChange() {
      this.setState({copyClip: !this.state.copyClip});
    }
  
    render() {
      return (
        <form class="binaryCalcHeader">
         <div>
            {CalcTypes.map((c) =>(
              <button onClick={e => this.handleCalcChange(e, c)} class="calc-buttons">{c}</button>
            ))}
          </div>
          <h1 class="calc-header">{this.state.calcType}</h1>
          <textarea class="inputField" value={this.state.value} onClick={this.handleInitClick} onChange={this.handleChange} cols="40" rows="5"></textarea>
          <textarea class="inputField" value={this.state.output} onClick={this.handleInitClick} onChange={this.handleChange} cols="40" rows="5"></textarea>
          <button onClick={this.handleClear} class="submitButton">Clear</button>
          <label class="checkboxClipboard"><input type="checkbox" checked={this.state.copyClip} onChange={this.handleClipChange}/> Copy to Clipboard</label>
          <a class="infoSection">{this.state.output !== 'output' ? "Copied to clipboard!": "Please make an entry above."}</a>
        </form>
      );
    }
  }

  export default InputScreen;