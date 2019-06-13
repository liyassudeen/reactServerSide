import React from 'react'

/* const Hello = (props) => (
  <React.Fragment>
    <h1>Hello, {props.name}!</h1>
  </React.Fragment>
) */
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Button Clicked!")
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.props.name}!</h1>
        <button onClick={this.handleClick}>Client Side Button</button>
      </React.Fragment>
    )
  }
}
export default Hello