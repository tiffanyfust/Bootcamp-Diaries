import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "./firebase";
import { Link } from 'react-router-dom';

const IconSet = (props) => {
//toggles dark/light mode
  const toggleMode = () => {
    const element = document.body;
    element.classList.toggle("darkMode");
  }


// pushes user textarea input to firebase when save icon is clicked
  const pushToFirebase = () => {
    const userEntry = props.userEntry;
    if (userEntry !== "") {
      const dbRefEntries = firebase.database().ref('/Entries');
      dbRefEntries.push(userEntry);
      prompt("It's saved — great work! Title your entry.");
    }
  }

  return (
    <div>
      <label htmlFor="toggleMenu">✍️ Toolkit</label>
      <input type="checkbox" id="toggleMenu" name="toggleMenu" />
      <div className="icons slidingIcons">
        <Link to={`/`}>
          <FontAwesomeIcon className='page fa-rotate-270' size='2x' icon={faFile} title='Hide Toolbar' />
        </Link>
        <Link to={`/timers/`}>
          <FontAwesomeIcon className='clock fa-rotate-270' size='2x' icon={faClock} title='Timer Toolbar' />
        </Link>
        <Link to={`/prompts/`}>
          <FontAwesomeIcon className='edit fa-rotate-270' size='2x' icon={faEdit} title='Prompt Toolbar' />
        </Link>
          <FontAwesomeIcon className='adjust fa-rotate-270' size='2x' icon={faAdjust} onClick={toggleMode} onKeyPress={(e) => {if (e.key === 'Enter') {toggleMode();}}} tabIndex="0" title='Light/Dark Mode'/>
        
          <FontAwesomeIcon className='save fa-rotate-270' size='2x' icon={faSave} onClick={pushToFirebase} onKeyPress={(e) => {if (e.key === 'Enter') {pushToFirebase();}}} tabIndex="0" title='Save Entry'/>
        
      </div>
    </div>
  )
}

export default IconSet;