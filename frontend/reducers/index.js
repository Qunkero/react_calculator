import * as types from '../constants/ActionTypes';

const initialState = {
    prevAction: '',
    sum: 0,
    entryBox: 0,
    history: '',
    prevHistory: ''
};



function addStringElement(a, b, prevAction) {
    if (a === 0 || !prevAction) {
        return String(b);
    } else {
        return String(a) + String(b);
    }
}



export default function (state = initialState, action) {

    const history = state.history ? state.history + ' ' : state.history;
    const prevSetEntryBox = state.prevAction === types.SET_ENTRY_BOX,
        prevHistory = prevSetEntryBox ? history + state.entryBox : state.prevHistory;

    switch (action.type) {



        case types.SET_ENTRY_BOX:
            return {
                ...state,
                entryBox: addStringElement(state.entryBox, action.number, prevSetEntryBox),
                prevAction: types.SET_ENTRY_BOX
            };

        case types.ADD:

            return {
                ...state,
                sum: prevSetEntryBox ? state.sum + Number(state.entryBox) : state.sum,
                entryBox: prevSetEntryBox ? String(state.sum + Number(state.entryBox)) : state.entryBox,
                prevHistory: prevHistory,
                history: prevSetEntryBox ? history + state.entryBox + " " + '+' : state.prevAction + " " + "+",
                prevAction: types.ADD
            };

        case types.SUBTRACTION:

            return {
                ...state,
                sum: prevSetEntryBox ? state.sum - Number(state.entryBox) : state.sum,
                entryBox: prevSetEntryBox ? String(state.sum - Number(state.entryBox)) : state.entryBox,
                prevHistory: prevHistory,
                history: prevSetEntryBox ? history + state.entryBox + " " + '-': state.prevHistory + " " + "-",
                prevAction: types.SUBTRACTION
            };



        default:
            return state
    }
}