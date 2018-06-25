import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      fontColor: 'green',
      fontSize: 36,
      fontFamily: 'arial',
      allowEdit: true,
    };
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  } 
  updateColor(val){
    this.setState({
    fontColor: val,
  })
}

  // updateSize

  updateFamily(val){
    this.setState({
      fontFamily: val,
    })
  }

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
           <EditToggle /> 
           <ColorChanger updateColor={this.updateColor} fontColor={this.state.fontColor}/> 
           <SizeChanger fontSize={this.state.fontSize}/> 
           <FamilyChanger fontFamily={this.state.fontFamily} updateFamily={this.updateFamily}/>

        </div>
        <div className="textArea">
           <TextContainer 
          fontSize={this.state.fontSize} 
          fontColor={this.state.fontColor} 
          fontFamily={this.state.fontFamily}/> 
        </div>
      </div>
    )
  }
}

export default App;
