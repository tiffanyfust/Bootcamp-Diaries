import { useState, memo} from "react";
import { Timer } from 'react-countdown-clock-timer';

const TimerForm = memo((props) => {
    const [timerLength, setTimerLength] = useState(0);
    const [timeAmount, setTimeAmount] = useState("");

    //gets value of selected option from TimeForm and prevents default behaviour of button
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimerLength(parseInt(timeAmount));
    }

    const updateTime = (e) => {
        setTimeAmount(e.target.value);
    }

    return (
        <>
        <form className="timeForm" onSubmit = {(e) => handleSubmit(e)}>
            <select required id="timeSelect" name="timeSelect"  value={timeAmount} onChange={updateTime}>
                <option value="" disabled>Select option</option>
                <option value="600">10 minutes</option>
                <option value="1200">20 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="2400">40 minutes</option>
            </select>
            <button className="dropBtn" type="submit" name="submit" value="submit" onClick={handleSubmit}>Start Timer</button>
        </form>

        <div className="timerCount">
        <Timer
        durationInSeconds={timerLength}
        formatted={true}
        isPaused={false}
        showPauseButton={false}
        showResetButton={false}/>
        </div>
        </>
    )

})


export default TimerForm;