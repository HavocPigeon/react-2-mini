import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  updateText(input) {
    this.setState({
      text: input
    })
  }

  render() {;
    console.log(this.props.fontColor)
    return (
      <div className="textContainer">
        <textarea 
          style={{
            color: this.props.fontColor,
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
          }}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




