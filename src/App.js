import './App.css';
import Footer from './Footer';
import Interests from './Interests'
import Banner from './Banner';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
       <Banner/>
       <Interests/>
       <Footer/>
    </div>
  );
}

export default App;
