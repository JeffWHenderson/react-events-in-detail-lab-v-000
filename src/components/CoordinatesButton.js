// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  getCoordinates = (event) => {
    var coordinatesArray = [this.pageX, this.pageY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render() {
    return (
      <button onClick={this.handleClick}>click me!</button>
    )
  }
}

export default CoordinatesButton
