import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {useChord} from '../hooks/chord.hook'
import {SubChordGrid} from "./SubChordGrid";
import {ChordButton} from "./ChordButton";
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

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.5rem 1.5rem 0 1.5rem;
    
`

export const ChordPicker = ({ chordHandler }) => {
    const {majorNames, activeChord, setActiveChord} = useContext(ChordContext)
    const {getChordString} = useChord()
    const [isSubGridOpen, setIsSubGridOpen] = useState(false)
    const [chord, setChord] = useState('D')

    return (
        <>
            <ChordGrid
                list={majorNames}
                setActiveChord={setActiveChord}
                setIsSubGridOpen={setIsSubGridOpen}
                setChord={setChord}
            />
                {isSubGridOpen
                    ? <SubChordGrid
                        chord={chord}
                        chordHandler={chordHandler}
                    />
                    : null}
        </>
    )
}
