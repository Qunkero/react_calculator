import * as types from '../constants/ActionTypes'
export const addNumber  = {
    type: types.ADD
};

export const divisionNumber = {
    type: types.DIVISION
};

export const multiplyNumber = {
    type: types.MULTIPLY
};

export const substractionNumber = {
    type: types.SUBTRACTION
};

export const getResult = {
    type: types.GET_RESULT
};

export const setEntryBox = (element)=> {
    return {
        type: types.SET_ENTRY_BOX,
        number: element
    }
};