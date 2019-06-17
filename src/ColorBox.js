import React, { Component } from 'react';
import './App.css';

class ColorBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: [
        {
          name: 'greyish',
          value: '#343243'
        },
        {
          name: 'yellow',
          value: "#ffff00"
        },
        { 
          name: 'blue',
          value: "blue"
        },
        {
          name: 'red',
          value: 'red'
        }
      ],
      colorIndex: 2,
    }
  }
  handleClick = ()=>{
    const{ colors, colorIndex } = this.state
    let newIndex = (colorIndex + 1) % colors.length
    this.setState({ colorIndex: newIndex })
  }
  render(){
    const{ colors, colorIndex } = this.state
    const currentColor = colors[colorIndex]
    
    return (
      <div 
        className='color-box'
        style={{backgroundColor: currentColor.value}}
        onClick={ this.handleClick }
      >
        I am color box: {currentColor.name}
      </div>
    );
  }
}

export default ColorBox;
