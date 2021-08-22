import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/auth/Login'
import Counter from './pages/testing/Counter';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route
        exact
        path='/'
        component={Login}
        />

        <Route
        exact
        path='/about'
        component={about}
        />

        <Route
        exact
        path='/counter'
        component={Counter}
        />
      </Switch>
      </div>
    </Router>
    
  );
}

function about() {
  return(
    <h1>About</h1>
  )
}


export default App;
