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
    var last = event.target.value.trim().split(/\s+|\n|\r/g).slice(-1);
    var options = [];

    if(last[0]==='o' && last.length===1){
      options.push('obj');
    }else if(last=='obj.'){
      options.push(...['foo1','foo2']);
    }else if(last=='obj.foo2.'){
      options.push(...['foo3']);
    }
    options.push(...validList.getWordList(last));

    this.setState({
      options: options
    })
    this.props.handleChange(event.target.value);
  }

  handleClick =(word) =>{
    var newText = this.props.text.split(' ');
     if(newText[newText.length-1].match(/obj.(foo[1|2])?/g)){
       word = newText[newText.length-1]+word;
//       console.log(word, newText[newText.length-1].match(/\w+.?$/g));
     }
    newText[newText.length-1]=newText[newText.length-1].replace(/\w+.?$/g, word);
    this.props.handleChange(newText.join(' '));
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
