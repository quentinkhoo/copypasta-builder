import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from "./components/Header.js";
import CopyPasta from "./components/CopyPasta.js";
import TwoNineNine from "./components/TwoNineNine.js";
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/" component={Header} />
                    <Route path="/copypasta-builder" component={CopyPasta}/>
                    <Route path="/299" exact component={TwoNineNine } />
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
