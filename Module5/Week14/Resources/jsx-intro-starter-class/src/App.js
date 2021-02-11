import Div from './Div';
import Composition from './Composition';
import List from './List';
import { add, num1 as n1, num2 as n2 } from './export';
// import add from './export';
// import * as myVariable from './export';

import './App.css';

function App() {
  const random = Math.floor(Math.random() * 10);
  const obj = { firstName: 'JD', lastName: 'Richards' };
  const fruits = ['apple', 'banana', 'peach', 'pear'];
  return (
    <div className='container'>
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
      <List fruits={fruits} />
      <Composition>
        <h2>Random Number: {random}</h2>
        <h2>
          {obj.firstName} {obj.lastName}
        </h2>
        <h2>Exports: {add(n1, n2)}</h2>
      </Composition>

      <Composition>
        <Div name='JD' color='#FFC300' background='#C70039' />
      </Composition>

      <Div />
      {/* <Div />
      <Div /> */}
    </div>
  );
}

export default App;
