// function Child({ count, message }) {
  // return (
  //   <>
  //     <h1>Hello from child!</h1>
  //     <h2>Count: {count}</h2>
  //     <h2>Message: {message}</h2>
  //   </>
  // );
// }

// export default Child;

import { Component } from 'react';

class Child extends Component {
  render() {
    const { count } = this.props;
    return (
      <>
        <h1>Hello from child!</h1>
        <h2>Count: {count}</h2>
        <h2>Message: {this.props.message}</h2>
      </>
    );
  }
}

export default Child;