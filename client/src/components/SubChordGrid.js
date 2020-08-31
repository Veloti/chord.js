import React, {useState} from 'react'
//import {StyledLink} from './ChordPicker'
//import {Wrapper} from './ChordPicker'
import {Link} from 'react-router-dom'
import {useChord} from '../hooks/chord.hook'
import styled from 'styled-components'
import {ChordButton} from "./ChordButton";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 1.5rem 0 1.5rem;
`

export const SubChordGrid = ({chord, chordHandler}) => {
    const {getChordString, subChordStringList, getSubChordString} = useChord(chord)
    //TODO: вынести обрабтотчик нажатия наверх

    return (
        <Wrapper>
            {
                subChordStringList.map( (item, index) => {
                    return (
                        <ChordButton
                            to={`/${getSubChordString(item)}`}
                            item={item}
                            key={index}
                            text={item.join('')}
                            major={false}
                            clickHandler={() => {
                                chordHandler(item.join(''))
                            }
                            }
                        />
                        )
                })
            }
        </Wrapper>
    )
}
