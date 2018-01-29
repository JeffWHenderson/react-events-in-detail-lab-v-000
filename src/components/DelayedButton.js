import React from 'react'

class DelayedButton extends React.Component {
  handleClick = (event) => {
    console.log(event)
  }
  
  render() {
    return (
      <p>`${handleClick}`</p>
    )
  }
}
