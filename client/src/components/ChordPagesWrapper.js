import React, {useContext, useEffect, useState} from 'react'
import {ChordPage} from "./ChordPage";
import styled from "styled-components";
import {AddChord} from "./AddChord";
import {ChordContext} from "../context/chord/chordContext";

const Border = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 20px;
    padding: 10px 10px;
    border: 2px solid red;
    border-radius: 10px;
`

export const ChordPagesWrapper = ({chord2}) => {
    const {majorNames, chordPages, focusElem, setFocusElem, addChordPage, activeChord} = useContext(ChordContext)
    //const [focusElem, setFocusElem] = useState(null)
    //const [chords, setChords] = useState(['C'])
    const [random, setRandom] = useState(Math.random())

    useEffect(() => {
        console.log('activeChord-activeChord-activeChord')

    },[activeChord])

    // useEffect(() => {
    //     const newChords = chordPages
    //     newChords[focusElem] = chord2
    //     addChordPage(chord2)
    //     //setChords(newChords)
    //     setRandom(Math.random())
    // }, [chord2])

    // const addChordHandler = chord => {
    //     setChords(prev => [...prev, chord])
    // }
    const chordList = chordPages.map( (item, index) => {
        return (<ChordPage
                chord={item}
                key={index}
                index={index}
                setFocus={setFocusElem}
                isFocused={(index === focusElem)}
            />)
    })
    return (
        <>
        <Border onClick={() => setFocusElem(null)}>
            {chordList}
            <AddChord onAdd={addChordPage} length={chordPages.length - 1}/>
        </Border>
            </>
    )
}
