import React, { Component } from 'react';
import "../styles/CopyPasta.css";

const inputPlaceholder = "Your nonsense goes here..."
const outputPlaceholder = "Your Copy-Pasta appears here!"
const copyPastaMapping = require("../mappings/wide-character.json")

class CopyPasta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userText: "",
            copyPastaText: ""
        }
    }
    
    render() {
        return (
            <div className="copyPasta">
                <div className="copyPastaLeft">
                    <div className="shadowBoxLeft">
                        <textarea
                            id="input"
                            autofocus="true"
                            className="textInput"
                            onChange={this.buildCopyPasta}
                            placeholder={inputPlaceholder}
                        />
                    </div>
                </div>
                <div className="copyPastaRight">
                    <div className="shadowBoxRight">
                        <textarea
                            id="output"
                            className="textOutput"
                            placeholder={outputPlaceholder}
                        />
                    </div>
                </div>
            </div>
        );
    }

    buildCopyPasta = (event) => {
        this.setState({
            userText: event.target.value
        });
        this.buildCopyPastaFromText(event.target.value);
    }

    buildCopyPastaFromText = (text) => {
        console.log(`text: ${text}`)
        var i;
        var copyPastaText = "";
        for (i = 0; i < text.length; i++) {
            if (copyPastaMapping[text.charAt(i)] !== undefined) {
                copyPastaText += copyPastaMapping[text.charAt(i)];
            } else {
                copyPastaText += text.charAt(i);
            }
        }
        this.setState({
            copyPastaText: copyPastaText
        })
        document.getElementById('output').innerHTML = copyPastaText;
    }
}

export default CopyPasta;
