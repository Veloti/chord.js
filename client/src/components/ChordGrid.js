import React from 'react'
import {ChordButton} from "./ChordButton";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.5rem 1.5rem 0 1.5rem;
    
`

export const ChordGrid = ({list, setActiveChord, setIsSubGridOpen, setChord, getChordString}) => (
        <Wrapper>
            {list.map((chord, index) => {
                return (
                    <ChordButton
                        to={`/${getChordString(chord)}`}
                        clickHandler={() => {
                            setChord(chord)
                            setIsSubGridOpen(true)
                            setActiveChord(chord)
                        }
                        }
                        text={chord}
                        major={true}
                        key={index}
                    />
                )
            })}
        </Wrapper>
    )

