// import { MapInteractionCSS } from "react-map-interaction";
// import { Component } from 'react';

// // If you want to have control over the scale and translation,
// // then use the `scale`, `translation`, and `onChange` props.
// class Child2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      // value: {
      //   scale: 1,
      //   translation: { x: 0, y: 0 },
      // },
//     };
//   }

//   render() {
//     const { scale, translation } = this.state.value;
//     console.log(scale, translation);
    // return (
    //   <MapInteractionCSS
    //     value={this.state.value}
    //     onChange={(value) => this.setState({ value: value })}
    //   >
    //     <h1>Hello from map interaction!</h1>
    //   </MapInteractionCSS>
    // );
//   }
// }

// export default Child2;

import { MapInteractionCSS } from "react-map-interaction";
import { useState } from 'react';

function Child2() {
  const [value, setValue] = useState({
        scale: 1,
        translation: { x: 0, y: 0 },
      });

  return (
    <MapInteractionCSS
      value={value}
      onChange={(value) => setValue(value)}
    >
      <h1>Hello from map interaction!</h1>
    </MapInteractionCSS>
  );
}

export default Child2;