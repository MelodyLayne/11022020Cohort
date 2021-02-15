// function Child({ count, message }) {
  // return (
  //   <>
  //     <h1>Hello from child!</h1>
  //     <h2>Count: {count}</h2>
  //     <h2>Message: {message}</h2>
  //   </>
//   );
// }


import { Component } from 'react'

class Child extends Component {
  // const { count, message } = this.props
  // destructuring props will allow you to not have to do the 'this.props' arguments in the return statements.

  render() {
    return (
      <>
        <h1>Hello from child!</h1>
        <h2>Count: {this.props.count}</h2>
        <h2>Message: {this.props.message}</h2>
      </>
  }
}

export default Child;
