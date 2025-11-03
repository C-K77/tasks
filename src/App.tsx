import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />

            <hr />
            <p>Two Dies</p>
            <TwoDice />
            <hr />
        </div>
    );
}

export default App;
