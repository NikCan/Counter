import React from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Setter} from "./components/Setter/Setter";

function App() {
    return (
        <div className={s.App}>
            <Setter/>
            <Counter/>
        </div>
    );
}

export default App;
