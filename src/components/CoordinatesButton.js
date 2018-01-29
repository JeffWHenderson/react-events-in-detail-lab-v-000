// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    console.log(event)
  }

  render() {
    return (
      <button onClick={this.handleClick}>click me!</button>
    )
  }
}

export default CoordinatesButton
