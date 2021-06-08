import './App.css';
import Footer from './Footer';
import Interests from './Interests'
import Banner from './Banner';
import Experiences from "./Experiences"

function App() {
  return (
    <div className="app">
       <Banner/>
       <Interests/>
       <Experiences/>
       <Footer/>
    </div>
  );
}

export default App;
