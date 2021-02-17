const USER_ADDED = "user/USER_ADDED";

export const addUser = (userObj) => {
  return {
    type: USER_ADDED,
    user: userObj,
  };
};


export const fetchUser = () => async(dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if(!response.ok) throw response
    const user = await response.json()
    user.message = 'WE GOT A USER!'
    dispatch(addUser(user))
    const state = getState()
    console.log('this is get state ', state)
    return user
}

export const postUser = (userInfo) => async (dispatch) => {
    console.log('In the post user thunk ', userInfo)
    const {title, body, userId} = userInfo
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if(!response.ok)throw response
    const user = await response.json()
    user.message = 'WE POSTED A USER!'
    dispatch(addUser(user))
    return user
}

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_ADDED:
      return {
          ...state, [action.user.id]: action.user
      }
    default:
      return state;
  }
}