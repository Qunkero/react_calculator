import * as types from '../constants/ActionTypes';

const initialState = {
    symbol: '',
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

    switch (action.type) {



        case types.SET_ENTRY_BOX:
            return {
                ...state,
                entryBox: addStringElement(state.entryBox, action.number, state.prevAction === types.SET_ENTRY_BOX),
                prevAction: types.SET_ENTRY_BOX
            };

        case types.ADD:



            return {
                ...state,
                symbol: '+',
                lastSymbol: types.ADD,
                sum: state.sum + Number(state.entryBox),
                entryBox: String(state.sum + Number(state.entryBox)),
                prevHistory: history +  state.entryBox,
                history: history + state.entryBox + " " + '+',
                prevAction: types.ADD
            };



        default:
            return state
    }
}