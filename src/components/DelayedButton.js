import React from 'react'

class DelayedButton extends React.Component {
  handleClick = (event) => {
    console.log(event)
  }

  render() {
    return (
        <button onClick={this.handleClick}>click me!</button>
    )
  }
}
