import React, {Component} from 'react';
import './inputpanel.css';
import {validList, obj} from '../../utils/constants.js'

var getList = (last) => {
  var list = [];
  //console.log('last', last);
  if(!last || last==="") return list;
  list.push(obj[0])
  for(let i=1; i<obj.length; i++){
    list.push(obj[0]+'.'+obj[i]);
  }
  var op=[];
  var index = list.indexOf(last.toString().substring(0,last.length-1));

  if(index>=0){
    for(let i=index+1; i<obj.length; i++){
      op.push(obj[i]);
    }
  }

  return op;

}

var getObjKeys = (last) => {
  if(last==='o')
    return ['obj'];
  if(last[last.length-1]!=='.') return [];

  const list = last.split('.');
  if(list.length===2){
      return Object.keys(obj);
  }

  if(list.length===3){
    if(typeof obj[list[list.length-2]]!=="object") return [];
      return Object.keys(obj[list[list.length-2]]);
  }
  return [];
}




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

  static getDerivedStateFromProps(nextProps){
    var last = nextProps.text.trim().split(/\s+|\n|\r/g).slice(-1);
    var options = [];
    if(last[0]==='o' || last[0].indexOf('obj')===0){
      options.push(...getObjKeys(last[0]));
    }
    options.push(...validList.getWordList(last));

    return({
      options:options
    })
  }

  handleClick =(word) =>{
    var newText = this.props.text.split(' ');
    if(newText[newText.length-1].match(/obj.(foo[1|2].)?/g)){
      word = newText[newText.length-1].match(/\w+.$/g)+word;
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
