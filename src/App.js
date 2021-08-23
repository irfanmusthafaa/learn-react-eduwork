import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/auth/Login'
import Counter from './pages/testing/Counter';
import { Validation } from './materi/Validation';
import TaskValidation from './task/TaskValidation'

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

        <Route
        exact
        path='/validation'
        component={Validation}
        />

        <Route
        exact
        path='/taskValidation'
        component={TaskValidation}
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
