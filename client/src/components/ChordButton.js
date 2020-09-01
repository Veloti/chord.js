import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {StyledLink} from './ChordPicker'


export const ChordButton = ({ to, text, clickHandler, major}) => {
    return (
        <Link to={to} onClick={clickHandler}>
            <StyledLink major={major}>
                {text}
            </StyledLink>
        </Link>
    )
}
