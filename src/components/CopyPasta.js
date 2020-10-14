import React, { Component } from 'react';

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
            <div>
                <textarea
                    id="input"
                    type="text"
                    style={{ 
                        padding: "10px",
                        margin: "10px"

                     }}
                    onChange={this.buildCopyPasta}
                    placeholder={inputPlaceholder}
                />
                <textarea
                id="output"
                style={{ 
                    padding: "10px",
                    margin: "10px"

                 }}
                placeholder={outputPlaceholder}
                />
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
            copyPastaText += copyPastaMapping[text.charAt(i)];
        }
        this.setState({
            copyPastaText: copyPastaText
        })
        document.getElementById('output').innerHTML = copyPastaText;
    }
}

export default CopyPasta;
