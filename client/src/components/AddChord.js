import React from 'react'
import styled, { css } from "styled-components";

const Wrapper = styled.div`
        margin: 5px 10px;
        border: 1px solid black;
        border-radius: 10px;
        width: 5%;
        cursor: pointer;
        transition: width 0.15s linear; 
        &:hover {
        width: 45%;
        background-color: gray;
        }
        ${props => props.length && css`
        width: 45%;
        `}
    `

export const AddChord = ({onAdd, length}) => (
        <Wrapper length={length} onClick={() => {
            onAdd('D')
        }}>
            <h1 className='center'>+</h1>
        </Wrapper>

    )
