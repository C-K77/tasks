import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { TwoDice } from "./components/TwoDice";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <hr />
            <p>Counter</p>
            <Counter />
            <hr />

            <hr />
            <p>Reveal Answer</p>
            <RevealAnswer />
            <hr />

            <hr />
            <p>Change Type</p>
            <ChangeType />
            <hr />

            <hr />
            <p>Two Dies</p>
            <TwoDice />
            <hr />
        </div>
    );
}

export default App;
