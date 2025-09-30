import React from 'react';
import BackgroundPattern from "./BackgroundPattern.jsx";
import Header from "./Header.jsx";
import Terminal from "./Terminal.jsx";
import MousePosition from "./MousePosition.jsx";
import "./App.css"

const App = () => {
    return (
        <div>
            <Header/>

            <MousePosition/>
            <Terminal/>

            <BackgroundPattern/>
        </div>
    )
}

export default App;