import React, {Component} from 'react';
import './outputpanel.css';

class OutputPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      text : ''
    }
  }


  render(){
    return(
      <div>
        <span>Output:</span>
        <hr/>
        <div className='container'>
          <textarea value={this.props.text} readOnly></textarea>
        </div>
      </div>
    )
  }
}

export default OutputPanel;
