import React, {useState} from "react";

function App() {
    // here you can add the logic

    const copy = () => {
        /* Get the text field */
        var copyText = document.getElementById("text");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        alert("Copied!");
    }

    const [data, setData] = useState([{}])
    // the filename reader for the backend
    const sendFile = (file) => {
        var input = document.querySelector('input[type="file"]')

        var data = new FormData()
        data.append('file', input.files[0])

        fetch('/upload', {
            method: 'POST',
            body: data

        }).then(response => response.json()
        ).then(json => {
            setData(json)
            console.log(json)
        });
        console.log('uploaded!')
    };


    return (
        <div>

            <h1 className="title">Welcome to pyOCR</h1> 
            <br />
            <br />
            <div className="button">
                <label className="input">
                    <input onChange={sendFile} type="file" accept="image/*" capture="environment" />
                </label>
            </div>
            <div className="btn">
                <button className="btnn" onClick={copy}>Copy to ClipBoard</button>
            </div>
            <textarea id="text" value={data}>
            </textarea>
            <img src="https://i.ibb.co/TR5J2S1/me.png" alt="me" />
            <p className="subtext">By <a href="https://bernardoolisan.com">bernardoolisan.com</a></p>

        </div>
    );
}

export default App;