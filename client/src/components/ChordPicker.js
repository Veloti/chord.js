import React, {useContext, useState} from 'react'
import styled, {css} from 'styled-components'
import {useChord} from '../hooks/chord.hook'
import {SubChordGrid} from "./SubChordGrid";
import {ChordContext} from "../context/chord/chordContext";
import {ChordGrid} from "./ChordGrid";

export const StyledLink = styled.div`
    background-color: rgb(188, 184, 177);
    margin:  0.2rem 0.1rem;
    padding: 0.2rem 0.7rem;
    color: black;
    font-weight: 500;
    &:hover {
        background-color: rgb(223, 221, 218);
    }
    ${props => props.major && css`
        background-color: rgb(255, 202, 177);
        padding: 0.5rem 0.7rem;
        &:hover {
        background-color: rgb(255, 226, 212);
        }
    `}
`

export const ChordPicker = () => {
    const [chord, setChord] = useState('D')
    const {getChordString, subChordStringList, getSubChordString} = useChord(chord)
    const {chordStringList, setActiveChord} = useContext(ChordContext)

    const [isSubGridOpen, setIsSubGridOpen] = useState(false)

    return (
        <>
            <ChordGrid
                list={chordStringList}
                setActiveChord={setActiveChord}
                getChordString={getChordString}
                setIsSubGridOpen={setIsSubGridOpen}
                setChord={setChord}
            />
            {isSubGridOpen
                ? <SubChordGrid
                    list={subChordStringList}
                    setActiveChord={setActiveChord}
                    getSubChordString={getSubChordString}
                    chord={chord}
                />
                : null}
        </>
    )
}
