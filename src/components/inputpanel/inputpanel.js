import React, {Component} from 'react';
import './inputpanel.css';
import {validList} from '../../utils/constants.js'

class InputPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      options : []
    }
  }

  handleChange = (event) => {
    var last = event.target.value.trim().split(' ').slice(-1);
    var options = validList.getWordList(last);
    console.log(last,options);
    this.setState({
      options: options
    })
    this.props.handleChange(event.target.value);
  }

  handleClick =(event) =>{

  }

  render(){
    const options = this.state.options.map(opt=>
      <li  onClick={()=>this.handleClick(opt)} className='list-group-item' key={opt} name={opt}>{opt}</li>
    )
    return(
      <div>
        <span>Input:</span>
        <hr/>
        <textarea onChange={this.handleChange} value={this.props.text} rows='15' cols='25'>
        </textarea>
        <ul className='list-group'>
        {options}
        </ul>
      </div>
    )
  }
}

export default InputPanel;
