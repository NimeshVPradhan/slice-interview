import React, {Component} from 'react';
import './inputpanel.css';

class InputPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      options : []
    }
  }

  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  }

  render(){
    return(
      <div>
        <span>Input:</span>
        <hr/>
        <textarea onChange={this.handleChange} value={this.props.text} rows='15' cols='25'>
        </textarea>
      </div>
    )
  }
}

export default InputPanel;
