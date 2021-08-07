import './App.css';
import logo from './assets/bootcampDiariesOutlined.png';
import Prompts from './Prompts';
import IconSet from './IconSet';
import TimerForm from './Timer';
import {useState} from 'react';
import Textarea from './Textarea';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';



function App() {

// sets buttonClicked to true when Timer Form button is clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  const startTiming = () => {
    setButtonClicked(true);
  }


  return (
    <Router>
      <div className="App wrapper">
        <nav>
          <div className="logoContainer">
            <h1 className="sr-only">Bootcamp Diaries</h1>
            <img src={logo} alt="Bootcamp Diaries Logo"/>
          </div>
          <Route path="/" component={IconSet} />
        </nav>
    
        <div className="divContainer">
          <div className="toolkitContainer">
            <Route exact path="/prompts/" component={Prompts} />
            <Route exact path="/timers/" component = {() => <TimerForm startTiming={startTiming} />} />
            
          </div>

          <Textarea buttonClicked={buttonClicked}/>
        <footer>
          <Footer />
        </footer>
        </div>
      </div>
      
    </Router>
  );
}

export default App;