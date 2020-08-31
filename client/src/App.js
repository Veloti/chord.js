import React, {useContext, useState} from 'react'
import 'materialize-css'
import {Navbar} from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import {ChordPicker} from './components/ChordPicker'
import {ChordContext} from './context/chord/chordContext'
import {ChordState} from "./context/chord/ChordState";

function App() {
    //TODO: вынести либо в хук либо в контекст
    const [chord, setChord] = useState('C')
    console.log('from app ', chord)
    const routes = useRoutes(true, chord)
    const chordHandler = (chord) => {
        setChord(chord)
    }
    return (
        <ChordState>
            <BrowserRouter>
                <div className='container'>
                    <Navbar/>
                    <ChordPicker chordHandler={chordHandler}/>

                </div>
                {routes}
            </BrowserRouter>
        </ChordState>
    );
}

export default App;
