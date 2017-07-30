import * as types from '../constants/ActionTypes';

const initialState = {
    prevAction: '',
    actionForUse: '',
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

function computeSum(action, prevSum, entryBox) {
    switch (action) {
        case types.ADD:
            return prevSum + entryBox;
        case types.SUBTRACTION:
            return prevSum - entryBox;
        default:
            return prevSum;
    }
}


export default function (state = initialState, action) {

    const history = state.history ? state.history + ' ' : state.history;
    const prevSetEntryBox = state.prevAction === types.SET_ENTRY_BOX,
        prevHistory = prevSetEntryBox ? history + state.entryBox : state.prevHistory,
        entryForState = prevSetEntryBox && state.actionForUse ? String(state.sum) : state.entryBox;

    switch (action.type) {



        case types.SET_ENTRY_BOX:
            const entryBox = addStringElement(state.entryBox, action.number, prevSetEntryBox);
            return {
                ...state,
                sum: state.actionForUse ? computeSum(state.actionForUse, state.sum, action.number) : Number(entryBox),
                entryBox: entryBox,
                prevAction: types.SET_ENTRY_BOX
            };

        case types.ADD:

            return {
                ...state,
                actionForUse: types.ADD,
                entryBox: entryForState,
                prevHistory: prevHistory,
                history: prevSetEntryBox ? history + state.entryBox + " " + '+' : state.prevAction + " " + "+",
                prevAction: types.ADD
            };

        case types.SUBTRACTION:

            return {
                ...state,
                actionForUse: types.SUBTRACTION,
                entryBox: entryForState,
                prevHistory: prevHistory,
                history: prevSetEntryBox ? history + state.entryBox + " " + '-': state.prevHistory + " " + "-",
                prevAction: types.SUBTRACTION
            };



        default:
            return state
    }
}