import {
    ADD_CHORD_PAGE,
    FOCUS_ELEM, GET_CHORD_INFO,
    REWRITE_CHORD_PAGE,
    SET_ACTIVE_CHORD
} from "../types";

const handlers = {
    [FOCUS_ELEM]: (state, {payload}) => ({...state, focusElem: payload}),
    [SET_ACTIVE_CHORD]: (state, {payload}) => ({...state, activeChord: payload}),
    [ADD_CHORD_PAGE]: (state, {payload}) => ({...state, chordPages: [...state.chordPages, payload]}),
    [REWRITE_CHORD_PAGE]: (state, {payload}) => ({...state, chordPages: payload}),
    [GET_CHORD_INFO]: (state, {payload}) => ({...state, chordsInfo: payload}),
    DEFAULT: state => state
}

export const chordReducer = (state, action) => {
    const reducer = handlers[action.type] || handlers.DEFAULT
    return reducer(state, action)
}
