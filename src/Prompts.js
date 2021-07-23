import firebase from "./firebase";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";



const Prompts = () => {

  const [prompts, setPrompts] = useState([]);
  const [userPromptInput, setUserPromptInput] = useState('');
  const [displayPrompt, setDisplayPrompt] = useState('');

  const handlePromptChange = (e) => {
      setUserPromptInput(e.target.value);
    }

    // prevents default button behaviour
  const handlePromptClick = (e) => {
    e.preventDefault();
  // Check for empty input before adding to database
    if (userPromptInput !== "") {
      const dbRefPrompts = firebase.database().ref('/Prompts');
      dbRefPrompts.push(userPromptInput);
    }
    setUserPromptInput('');
  }

  useEffect(() => {
    // ref to firebase with nested prompts data
    const dbRefPrompts = firebase.database().ref('/Prompts');

    dbRefPrompts.on('value', (response) => {
      const newState = [];
      const promptData = response.val();

      for (let key in promptData) {
        newState.push(promptData[key]);
      }
      setPrompts(newState);
    
    });

    
  }, [])



  const randomizer = () => {
    // variable with random index number, based on array length
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setDisplayPrompt(prompts[randomIndex]);
    return displayPrompt;
    }

    return (
      <div className="promptsFlex">
      <form className="promptForm">
        <label htmlFor="newPrompt">
            <input 
              type="text" 
              id="newPrompt"
              className="newPrompt"
              placeholder="Spark an idea for a fellow user!" 
              onChange={handlePromptChange}
              value={userPromptInput}
            />
          </label>
        <button type="submit" onClick={handlePromptClick}>Share Prompt</button>
        </form>
        <div className="promptsRequest">
          <
          FontAwesomeIcon 
          className='icons sync' 
          icon={faSyncAlt} 
          onClick={randomizer} 
          title="Looking for inspiration? Click for a writing prompt"
          />

          <p>{displayPrompt}   &nbsp; </p>

        </div>
    </div>
    )


}

export default Prompts;