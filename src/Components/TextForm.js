import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to Uppercase!", "success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to Lowercase!", "success");
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert(": Text cleared!", "success");
    };
    const handlelOnChange = (event) => {
        setText(event.target.value);
    };
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(": Text copied!", "success");
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(": Extra spaces removed!", "success");
    };

    const [text, setText] = useState('');
    console.log("Mode:", props.mode);
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#3c3c3c' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                        }}
                        value={text}
                        onChange={handlelOnChange}
                        id="exampleFormControlTextarea1"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                    Clear text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                    Copy text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
