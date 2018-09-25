import React, { Component } from 'react';
import InputPanel from '../inputpanel/inputpanel.js';
import OutputPanel from '../outputpanel/outputpanel.js';


class MainPanel extends Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }

  handleChange = text => {
    this.setState({
      text: text
    });
  }

  render() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <InputPanel text={this.state.text} handleChange={this.handleChange}/>
            </div>
            <div className='col-lg-6'>
              <OutputPanel text={this.state.text}/>
            </div>
          </div>
        </div>
    );
  }
}

export default MainPanel;
