import React, {useReducer} from 'react'
import {ChordContext} from './chordContext'
import {chordReducer} from "./chordReducer";
import {
    ADD_CHORD_PAGE,
    FOCUS_ELEM,
    REWRITE_CHORD_PAGE,
    SET_ACTIVE_CHORD
} from "../types";

const chordStringList = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B']

export const ChordState = ({children}) => {
    const initialState = {
        chordPages: ['C'],
        activeChord: 'C',
        focusElem: 0
    }

    const [state, dispatch] = useReducer(chordReducer, initialState)

    const setFocusElem = (index) => dispatch({type: FOCUS_ELEM, payload: index})
    const setActiveChord = (chord) => {
        const newChordPages = state.chordPages
        newChordPages[focusElem] = chord
        dispatch({type: REWRITE_CHORD_PAGE, payload: newChordPages})
        dispatch({type: SET_ACTIVE_CHORD, payload: chord})
    }
    const addChordPage = (chord) => {
        console.log('addChordPage: ',chord)
        console.log(state.chordPages)
        dispatch({type: ADD_CHORD_PAGE, payload: chord})
    }

    const {chordPages, activeChord, focusElem} = state

    return (
        <ChordContext.Provider value={{
            chordStringList, chordPages, activeChord, focusElem, setActiveChord,
            setFocusElem, addChordPage
        }}>
            {children}
        </ChordContext.Provider>
    )
}
