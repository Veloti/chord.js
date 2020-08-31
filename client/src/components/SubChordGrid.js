import React from 'react'
import {useChord} from '../hooks/chord.hook'
import styled from 'styled-components'
import {ChordButton} from "./ChordButton";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 1.5rem 0 1.5rem;
`

export const SubChordGrid = ({list, setActiveChord, getSubChordString}) => (
        <Wrapper>
            {
                list.map( (item, index) => {
                    return (
                        <ChordButton
                            to={`/${getSubChordString(item)}`}
                            item={item}
                            key={index}
                            text={item.join('')}
                            major={false}
                            clickHandler={() => {
                                setActiveChord(item.join(''))
                            }
                            }
                        />
                        )
                })
            }
        </Wrapper>
    )

