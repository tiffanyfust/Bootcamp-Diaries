import { useState, useEffect } from "react";

const Textarea = (props) => {
    const [userEntryInput, setUserEntryInput] = useState('');
    const [finished, setFinished] = useState('');

    console.log(props.buttonClicked)
    // updates user entry from textarea every time it changes
    const handleEntryChange = (e) => {
        setUserEntryInput(e.target.value);
    }

    //timer that shows alert when user stops typing for 15 seconds

    useEffect(() => {
        let typingTimer = null;
        if(props.buttonClicked === true) {
        typingTimer = setTimeout(() => {
            setFinished(userEntryInput);
        }, 10000);
        return () => {
            clearTimeout(typingTimer);
        }
        }
    }, [userEntryInput, props.buttonClicked])

    useEffect(() => {
        let alertTimer = null;
        if (finished !== '') {
        alertTimer = setTimeout(() => {
            alert("Don't lose your flow — keep writing, you got this!")
        }, 5000);
        };
        return () => {
        clearTimeout(alertTimer);
        }
    }, [finished])

//end timer

    return (
        <div className="entryContainer">
            <form className="textBox">
                <label htmlFor="story" className="sr-only">Main Textarea</label>
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
    )
}

export default Textarea;