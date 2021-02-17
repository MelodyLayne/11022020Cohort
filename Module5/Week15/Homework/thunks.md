//The basic thunk example
```javascript
const thunkActionCreator = () => {
	dispatchEvent({
		type: 'RECEIVE_MESSAGE',
		message: 'This will be dispatched immediately.',
	});

	setTimeout(() =>
		dispatchEvent(
			{
				type: 'RECEIVE_MESSAGE',
				message: 'This will be dispatched 1 second later',
			},
			1000
		)
	);
};

//The thunk middleware example
const thunk = ({ dispatch, getState }) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(dispatch, getState);
	}
	return next(action);
};
export default thunk;


//Redux has a thunk middleware package that you can use for cleaner and more consistent application, as used below -
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-think';

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(think, logger),
    );
};

export default configureStore;

//Example of a thunk action creator dispatching a regular POJO action -
export const RECEIVE_FRUITS = 'RECEIVE_FRUITS';

export const fetchFruits = () => async (dispatch) => {
	const res = await fetch(`/fruits`);
	const data = await res.json();
	res.data = data;
	if (res.ok) {
		dispatch(receiveFruits(data.fruits));
	} else {
		throw res;
	}
}

const receiveFruits = (fruits) => {
	return {
		type: RECEIVE_FRUITS,
		fruits,
	}
}
