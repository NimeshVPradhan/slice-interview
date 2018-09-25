import React, {Component} from 'react';
import './outputpanel.css';

import {outputpanelregex} from '../../utils/constants.js';

var $ = require('jquery');

class OutputPanel extends Component{
  constructor(){
    super();
    this.state = {
      text : ''
    }
  }

  static getDerivedStateFromProps(nextProps){
    var text = nextProps.text;
    text = text.replace(outputpanelregex, '<b>$&</b>');
    $('.output-content').html(decodeURIComponent(text));
    return{
      text: text
    }
  }

  render(){
    return(
      <div>
        <span>Output:</span>
        <hr/>
        <div className='container border'>
          <pre className='output-content'></pre>
        </div>
      </div>
    )
  }
}

export default OutputPanel;
