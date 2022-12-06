import React from 'react';
import s from './App.module.css';
import {CounterContainer} from "./components/Counter/CounterContainer";
import {SetterContainer} from "./components/Setter/SetterContainer";

function App() {
    return (
        <div className={s.App}>
            <SetterContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
