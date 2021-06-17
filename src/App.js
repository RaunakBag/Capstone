import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from "./Firebase";
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('the user is ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER', 
          user: authUser
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/admin">
            <h1>This is the hosting page</h1>
          </Route>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      
      </div>
    </Router>
   
  );
}

export default App;