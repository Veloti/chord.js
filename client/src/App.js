import React, {useContext, useState} from 'react'
import 'materialize-css'
import {Navbar} from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import {ChordPicker} from './components/ChordPicker'
import {ChordContext} from './context/chord/chordContext'
import {ChordState} from "./context/chord/ChordState";

function App() {
    const routes = useRoutes(true)
    return (
        <ChordState>
            <BrowserRouter>
                <div className='container'>
                    <Navbar/>
                    <ChordPicker />

                </div>
                {routes}
            </BrowserRouter>
        </ChordState>
    );
}

export default App;
