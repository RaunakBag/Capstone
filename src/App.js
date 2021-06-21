import './App.css';
import { Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import OnlineExp from './components/Experience/OnlineExp/OnlineExp';
import OfflineExp from './components/Experience/OfflineExp/OfflineExp';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <div className="app">
       <Switch>
       <Route  exact path="/Checkout" component={Checkout}/>
       <Route  exact path="/OnlineExp" component={OnlineExp}/>
       <Route  exact path="/OfflineExp" component={OfflineExp}/>
       <Route  exact path="/" component={Home}/>
       </Switch>
    </div>
  );
}

export default App;
