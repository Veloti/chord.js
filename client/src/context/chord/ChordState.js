import React, {useReducer} from 'react'
import {ChordContext} from './chordContext'
import {chordReducer} from "./chordReducer";
import {
    ADD_CHORD_PAGE,
    FOCUS_ELEM, GET_CHORD_INFO,
    REWRITE_CHORD_PAGE,
    SET_ACTIVE_CHORD
} from "../types";
import urlObject from '../../data/shortName-url.json'

export const chordStringList = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B']

export const ChordState = ({children}) => {
    const initialState = {
        chordPages: ['C'],
        chordsInfo: {},
        activeChord: 'C',
        focusElem: 0
    }

    const [state, dispatch] = useReducer(chordReducer, initialState)

    const getChordInfo = async (shortName) => {
        try {
            const url = urlObject[shortName]
            if (chordsInfo[shortName]) {
                console.log('лишний запрос не сделан')
                return null
            }
            const response = await fetch(`/api/chord/${url}`)
            const info = await response.json()
            console.log('fetch result: ', info)
            const newChordsInfo = state.chordsInfo
            newChordsInfo[info.shortName] = info
            dispatch({type: GET_CHORD_INFO, payload: newChordsInfo })
        } catch (e) {
            console.log('ChordState.js ', e)
        }

    }
    const setFocusElem = (index) => dispatch({type: FOCUS_ELEM, payload: index})
    const setActiveChord = (chord) => {
        const newChordPages = state.chordPages
        newChordPages[focusElem] = chord
        dispatch({type: REWRITE_CHORD_PAGE, payload: newChordPages})
        dispatch({type: SET_ACTIVE_CHORD, payload: chord})
    }
    const addChordPage = (chord) => {
        dispatch({type: ADD_CHORD_PAGE, payload: chord})
    }

    const {chordPages, activeChord, focusElem, chordsInfo} = state

    return (
        <ChordContext.Provider value={{
            chordStringList, chordPages, activeChord, focusElem, chordsInfo, setActiveChord,
            setFocusElem, addChordPage, getChordInfo
        }}>
            {children}
        </ChordContext.Provider>
    )
}
