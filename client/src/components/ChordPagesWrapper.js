import React, {useContext, useEffect, useState} from 'react'
import styled, {css} from "styled-components";
import {AddChord} from "./AddChord";
import {ChordContext} from "../context/chord/chordContext";
import {ChordPageSwap} from './ChordPageSwap'


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

    const chordList = chordPages.map( (item, index) => {
        return (<ChordPageSwap
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


