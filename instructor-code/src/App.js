import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'green',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true,
    };
  }

  // updateColor

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle />
          <ColorChanger fontColor={this.state.fontColor} />
          <SizeChanger />
          <FamilyChanger />
        </div>
        <div className="textArea">
          <TextContainer />
        </div>
      </div>
    )
  }
}

export default App;
