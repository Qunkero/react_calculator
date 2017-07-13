import * as types from '../constants/ActionTypes';
import initialState from './initialState';



export default function (state = initialState, action) {
    if (action.type = types.MULTIPLY || types.DIVISION || types.ADD || types.SUBTRACTION && !!state.result == false) {
        return
    }

    switch (action.type) {
        case types.ADD:
            return {
                ...state, entryBox: +state.entryBox + +action.number
            };

        case types.DIVISION:
            return {
                ...state, entryBox: +state.entryBox / +action.number
            };

        case types.SET_ELEMENT:



        default:
            return state
    }
}