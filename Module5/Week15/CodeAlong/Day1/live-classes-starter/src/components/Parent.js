/* import { useState, useEffect } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("I have mounted");
    return () => {
      console.log("I have mounted");
      console.log("I am going to unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Count was updated to", count);
  }, [count]);

  useEffect(() => {
    console.log("Message was updated to", message);
  }, [message]);

  return (
    <>
      <h1>Hello from parent!</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      />
      <Child count={count} message={message} />
    </>
  );
}

export default Parent;
*/

// refactoring the above code for classes.

import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: '',
    }
  }

  componentDidMount() {
    console.log("I have mounted");
  }

  componentDidUpdate() {
    console.log('State was updated to '+ this.state)
  }
  componentWillUnmount() {
    console.log("I am going to unmount");

  }

  render() {
    return (
    <>
      <h1>Hello from parent!</h1>
        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
          }>
          Increment
    </button>
      <button onClick={() => this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }>
          Decrement
    </button>
      <input
        type="text"
        value={this.state.message}
          onChange={(e) => this.setState({
            message: e.target.value
          })}
      />
      <Child count={this.state.count} message={this.state.message} />
    </>
    )
  }
}

export default Parent;
