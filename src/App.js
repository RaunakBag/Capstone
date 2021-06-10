import './App.css';
import { Route, Switch} from 'react-router-dom'
import OnlineExp from './OnlineExp'
import OfflineExp from './OfflineExp'
import Home from './Home'

function App() {
  return (
    <div className="app">
       <Switch>
       <Route  exact path="/OnlineExp" component={OnlineExp}/>
       <Route  exact path="/OfflineExp" component={OfflineExp}/>
       <Route  exact path="/" component={Home}/>
       </Switch>
    </div>
  );
}

export default App;
