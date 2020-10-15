import React, { Component } from 'react';
import "../styles/CopyPasta.css";

const inputPlaceholder = "Your nonsense goes here..."
const outputPlaceholder = "Your Copy-Pasta appears here!"
const copyButtonText = "Copy to Clipboard"
const copyButtonClickedText = "Copied!"

const copyButtonDisabledColor = "grey";
const copyButtonEnabledColor = "white";

const copyPastaMapping = require("../mappings/wide-character.json")

class CopyPasta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userText: "",
            copyPastaText: ""
        }
    }

    componentDidMount() {
        this.toggleCopyButton();
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
                            readonly="true"
                        />
                        <input
                            id="copy"
                            type="button"
                            className="copyButton"
                            display="block"
                            style={{color: copyButtonDisabledColor}}
                            onClick={this.copyToClipboard}
                            onMouseEnter={this.focusCopyButton}
                            onMouseLeave={this.unfocusCopyButton}
                            value={copyButtonText}
                        />
                    </div>
                </div>
            </div>
        );
    }

    toggleCopyButton() {
        var copyButton = document.getElementById('copy');
        copyButton.value = copyButtonText;
        var currentCopyPasta = document.getElementById('output').innerHTML;
        if (currentCopyPasta.length > 0) {
            copyButton.style.color = copyButtonEnabledColor;
            copyButton.disabled = false;
        } else {
            copyButton.style.color = copyButtonDisabledColor;
            copyButton.disabled = true;
        }
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
        this.toggleCopyButton();
    }

    copyToClipboard = () => {
        var textToCopy = document.getElementById('output');
        textToCopy.select();
        textToCopy.setSelectionRange(0, 99999);
        document.execCommand("copy");
        // Do some UX stuff
        var copyButton = document.getElementById('copy');
        copyButton.value = copyButtonClickedText;
    }

    focusCopyButton = () => {
        var copyButton = document.getElementById('copy');
        if (copyButton.disabled === false) {
            copyButton.style.backgroundColor = "#2aac2a"
        }
    }

    unfocusCopyButton = () => {
        var copyButton = document.getElementById('copy');
        copyButton.style.backgroundColor = "limegreen";
    }
}

export default CopyPasta;
