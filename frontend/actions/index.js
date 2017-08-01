import * as types from '../constants/ActionTypes'


export const allClean  = () => ({ type: types.ALL_CLEAN});

export const getResult  = () => ({ type: types.GET_RESULT});

export const setEntryBox = (element)=> ({ type: types.SET_ENTRY_BOX, number: element });



export const addNumber  = () => ({ type: types.ADD});

export const divisionNumber = ()=>({type: types.DIVISION});

export const multiplyNumber =()=>({type: types.MULTIPLY});

export const subtractionNumber = ()=>({type: types.SUBTRACTION});

