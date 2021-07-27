import { useState } from "react";

const Textarea = () => {
    const [userEntryInput, setUserEntryInput] = useState('');

    // updates user entry from textarea every time it changes
    const handleEntryChange = (e) => {
        setUserEntryInput(e.target.value);
    }

    return (
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
    )
}

export default Textarea;