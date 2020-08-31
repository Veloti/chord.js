import React, {useState} from "react";
import styled, {css} from "styled-components";
import ReactCardFlip from 'react-card-flip';


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

export const ChordPageSwap = ({ chord, index, setFocus, isFocused}) => {
    const [isFront, setIsFront] = useState(true)
    return (
        <Wrapper isFocused={isFocused}>
            <ReactCardFlip isFlipped={isFront} flipDirection="horizontal">
                <div
                    className='center-align'
                    onClick={event => {
                        event.stopPropagation()
                        setFocus(index)
                        console.log('from page: ', chord)
                        }
                    }
                >
                    <div onClick={() => setIsFront(!isFront)}>
                        <a className="btn-flat disabled">Swap</a>
                    </div>
                    <h1 className='center'>{chord}</h1>
                    <h2 className='center'>{'BACK'}</h2>

                </div>
                <div
                    className='center-align'
                    onClick={event => {
                        event.stopPropagation()
                        setFocus(index)
                        console.log('from page: ', chord)
                        }
                    }
                    >
                    <div onClick={() => setIsFront(!isFront)}>
                        <a className="btn-flat disabled">Swap</a>
                    </div>
                    <h1 className='center'>{chord}</h1>
                    <h2 className='center'>{'FRONT'}</h2>
                </div>
            </ReactCardFlip>
        </Wrapper>

    )
}
