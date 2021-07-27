import './App.css';
import logo from './assets/bootcampDiariesOutlined.png';
import Prompts from './Prompts';
import IconSet from './IconSet';
import TimerForm from './Timer';
import {useEffect, useState, useRef} from 'react';
import Textarea from './Textarea';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';



function App() {

const [finished, setFinished] = useState('');


// sets buttonClicked to true when Timer Form button is clicked
  const buttonClicked = useRef(false);

  const startTiming = () => {
    buttonClicked.current = true;
  }

//timer that shows alert when user stops typing for 15 seconds

  // useEffect(() => {
  //   let typingTimer = null;
  //   if(buttonClicked === true) {
  //     typingTimer = setTimeout(() => {
  //         setFinished(userEntryInput);
  //     }, 5000);
  //     return () => {
  //       clearTimeout(typingTimer);
  //     }
  //   }
  // }, [userEntryInput, buttonClicked])

  // useEffect(() => {
  //   let alertTimer = null;
  //   if (finished !== '') {
  //     alertTimer = setTimeout(() => {
  //         alert("Don't lose your flow — keep writing, you got this!")
  //     }, 10000);
  //   };
  //   return () => {
  //     clearTimeout(alertTimer);
  //   }
  // }, [finished])
  
//end timer


  return (
    <Router>
      <div className="App wrapper">
        <nav>
          <div className="logoContainer">
            <img src={logo} alt="Bootcamp Diaries Logo"/>
          </div>
          <Route path="/" component={() => <IconSet />} />
        </nav>
    
        <div className="divContainer">
          <div className="toolkitContainer">
            <Route exact path="/prompts/" component={Prompts} />
            <Route exact path="/timers/" component = {() => <TimerForm startTiming={startTiming}/>} />
            
          </div>

          <Textarea />
        <footer>
          <Footer />
        </footer>
        </div>
      </div>
      
    </Router>
  );
}

export default App;