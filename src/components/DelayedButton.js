import React from 'react'

class DelayedButton extends React.Component {
  handleClick = (event) => {
    console.log(event.type)
  }

  render() {
    return (
        <button onClick={this.handleClick}>click me!</button>
    )
  }
}

export default DelayedButton
