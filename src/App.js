import './App.css';
import logo from './assets/bootcampDiariesOutlined.png';
import Prompts from './Prompts';
import IconSet from './IconSet';
import Timers from './Timer';
import { TimeForm } from './Timer';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';



function App() {
const [selected, setSelected] = useState(0);
const [userEntryInput, setUserEntryInput] = useState('');
const [finished, setFinished] = useState('');

//gets value of selected option from TimeForm and prevents default behaviour of button
  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSelected(value);
  }

// updates user entry from textarea every time it changes
  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);
    
  }

// sets buttonClicked to true when Timer Form button is clicked
let buttonClicked = false;

  const startTiming = () => {
    buttonClicked = true;
  }

//timer that shows alert when user stops typing for 15 seconds

  useEffect(() => {
    let typingTimer = null;
    if(buttonClicked === true) {
      typingTimer = setTimeout(() => {
          setFinished(userEntryInput);
      }, 5000);
      return () => {
        clearTimeout(typingTimer);
      }
    }
  }, [userEntryInput, buttonClicked])

  useEffect(() => {
    let alertTimer = null;
    if (finished !== '') {
      alertTimer = setTimeout(() => {
          alert("Don't lose your flow — keep writing, you got this!")
      }, 10000);
    };
    return () => {
      clearTimeout(alertTimer);
    }
  }, [finished])
  
//end timer

  
  return (
    <Router>
      <div className="App wrapper">
        <nav>
          <div className="logoContainer">
            <img src={logo} alt="Bootcamp Diaries Logo"/>
          </div>
          <Route path="/" component={props => <IconSet userEntry={userEntryInput}/>} />
        </nav>
    
        <div className="divContainer">
          <div className="toolkitContainer">
            <Route exact path="/prompts/" component={Prompts} />
            <Route exact path="/timers/" component = {props => <TimeForm handleSubmit={handleSubmit} startTiming={startTiming}/>} />
            <Route exact path="/timers/" component = {props => <Timers userChoice={selected} />} />
          </div>

          <div className="entryContainer">
            <form className="textBox">
              <textarea
                id="story" name="story"
                placeholder='"The scariest moment is always just before you start..."'
                rows="25" cols="75"
                onChange={handleEntryChange}
                value={userEntryInput}
              >
              </textarea>
            </form>
          </div>
        <footer>
          <Footer />
        </footer>
        </div>
      </div>
      
    </Router>
  );
}

export default App;