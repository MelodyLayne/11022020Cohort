import {useState} from 'react'
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles'
import { fetchUser, postUser } from './store/user';

const App = () => {
  const [user, setUser] = useState(null)

  const userInfo = {
    title: 'we created a user!',
    body: 'redux is fun!',
    userId: 2
  }
  const dispatch = useDispatch()

  const handleGetUser = async()=> {
    const addedUser = await dispatch(fetchUser())
    setUser(addedUser)
  }

  const classes = useStyles();

  const handlePostUser = async() => {
    setUser(await dispatch(postUser(userInfo)))
  }

  return (
    <div >
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Button  onClick={handleGetUser} size='large' color="inherit">GET A USER</Button>
          <Button  onClick={handlePostUser} size='large' color="inherit">CREATE A USER</Button>
        </Toolbar>
      </AppBar> 
      {console.log("User status: ", user ? user.message: "No user yet")}
      {user ? (<h1 className={classes.user}>{user.message}</h1>) : (<h1 className={classes.user}>No User Yet</h1>)}
    </div>
  );
}

export default App;