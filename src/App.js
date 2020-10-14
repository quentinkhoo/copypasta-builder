import React, { Component } from 'react';
import Header from "./components/Header.js";
import CopyPasta from "./components/CopyPasta.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <CopyPasta/>
            </div>
        );
    }
}

export default App;
