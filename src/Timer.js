import { useState } from "react";
import { Timer } from 'react-countdown-clock-timer';


const Timers = (props) => {

// gets the value of selected option from TimeForm
    const timerLength = parseInt(props.userChoice);

// countdown that uses user selected value
    return (
    <div className="timerCount">
        <Timer
        durationInSeconds={timerLength}
        formatted={true}
        isPaused={false}
        showPauseButton={false}
        showResetButton={false}/>
    </div>
    )
}

// Form to let users select how long of a timer they want
const TimeForm = (props) => {
    const [timeAmount, setTimeAmount] = useState("");

    const updateTime = (e) => {
        setTimeAmount(e.target.value);
    }

    return (
        <form className="timeForm" onSubmit = {(e) => props.handleSubmit(e, timeAmount)}>
            <select required id="timeSelect" name="timeSelect"  value={timeAmount} onChange={updateTime}>
                <option value="" disabled>Select option</option>
                <option value="600">10 minutes</option>
                <option value="1200">20 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="2400">40 minutes</option>
            </select>
            <button className="dropBtn" type="submit" name="submit" value="submit" onClick={props.startTiming()}>Start Timer</button>
        </form>
    )
}

export default Timers;
export {TimeForm};