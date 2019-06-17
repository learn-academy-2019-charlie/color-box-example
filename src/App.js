import React, {Component} from 'react';
import './App.css';

import ColorBox from './ColorBox'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colorBoxes: []
    }
  }
  addAColorBox = ()=>{
    const{ colorBoxes } = this.state 
    colorBoxes.push(< ColorBox />)
    //this.setState({ colorBoxes: colorBoxes })
    //same as:
    this.setState({ colorBoxes })
  }
  render(){
    return (
      <div className="App">
        {this.state.colorBoxes.map((colorBox)=>{
          return colorBox;
        })}
        <div>
          <button
            onClick={ this.addAColorBox }
          >
            Add A Color Box
          </button>
        </div>
      </div>
    )
  }
}

export default App;
