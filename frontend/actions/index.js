import * as types from '../constants/ActionTypes'

export const addNumber  = () => ({ type: types.ADD});

export const divisionNumber = ()=>({type: types.DIVISION});

export const multiplyNumber =()=>({type: types.MULTIPLY});

export const subtractionNumber = ()=>({type: types.SUBTRACTION});

export const setEntryBox = (element)=> ({ type: types.SET_ENTRY_BOX, number: element });