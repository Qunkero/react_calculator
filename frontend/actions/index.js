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

export const substraction = {
    type: types.SUBTRACTION
};

export const getResult = {
    type: types.GET_RESULT
};

export const setElement = (element)=> {
    return {
        type: types.SET_ELEMENT,
        element: element
    }
};