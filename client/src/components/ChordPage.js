import React from 'react'
import styled, {css} from 'styled-components'

const Wrapper = styled.div`
    margin: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    min-width: 45%;
    cursor: pointer;
    &:hover {
    box-shadow: 0 0 10px gray;
    }
    ${props => props.isFocused && css`
    box-shadow: 0 0 10px gray;
    `}
`

export const ChordPage = ({chord, index, setFocus, isFocused}) => {
    console.log('Chord page render on index: ',index)
    return (
            <Wrapper
                onClick={event => {
                    event.stopPropagation()
                    setFocus(index)
                    console.log('from page: ', chord)
                }
                }
                isFocused={isFocused}>
                <h1 className='center'>{chord}</h1>
                <h2 className='center'>{index}</h2>
            </Wrapper>
    )
}
