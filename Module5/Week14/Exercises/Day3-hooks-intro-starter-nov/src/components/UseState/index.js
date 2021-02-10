import { useState } from 'react';

import './UseState.css';
const UseState = () => {
	const [theme, setTheme] = useState('light'); //convention uses set with the first variable to name the second variable.
	const [count, setCount] = useState(0);

	return (
		<div className={theme}>
			<h1>UseState Component</h1>
			<button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((foo) => foo + 1)}>Increment</button>
		</div>
	);
};
export default UseState;
