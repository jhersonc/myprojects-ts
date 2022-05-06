import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const birds = useSelector(state => state.birds);

    return <></>
}

export default App;