import reducer from './index';
import * as action from '../actions'
import * as types from '../constants/ActionTypes';

const initialState = {
    prevAction: '',
    sum: 0,
    entryBox: 0,
    history: '',
    prevHistory: ''
};


describe('calculator reducer test',() =>{

    it('should handle initial state', ()=>{

        expect(
            reducer(undefined, {})
        ).toEqual(initialState)

    });

    it('should set_ENTRY_BOX', ()=>{

        expect(
            reducer(initialState, action.setEntryBox(5))
        ).toEqual({
            sum: 0,
            entryBox: '5',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });

        expect(
            reducer({
                sum: 0,
                entryBox: '5',
                prevHistory: '',
                history: '',
                prevAction: types.SET_ENTRY_BOX
            }, action.setEntryBox(5))

        ).toEqual({
            sum: 0,
            entryBox: '55',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });

    });

    it('users steps', ()=>{

        expect(
            reducer({
                sum: 0,
                entryBox: '5',
                history: '', // 5 + add
                prevHistory: '', // 5 + symbol
                prevAction: types.SET_ENTRY_BOX
            }, action.addNumber)
        ).toEqual({
            sum: 5,
            entryBox: '5',
            history: '5 +',
            prevAction: types.ADD,
            prevHistory: '5' // history + entryBox
        });

        expect(
            reducer({
                sum: 5,
                entryBox: '5',
                history: '5 +',
                prevAction: types.ADD,
                prevHistory: '5'
            }, action.setEntryBox(6))
        ).toEqual({
            sum: 5,
            entryBox: '6',
            history: '5 +',
            prevHistory: '5',
            prevAction: types.SET_ENTRY_BOX
        });

        expect(
            reducer({
                sum: 5,
                entryBox: '6',
                history: '5 +', // history + entryBox + types.ADD
                prevHistory: '5',
                prevAction: types.SET_ENTRY_BOX
            }, action.addNumber)

        ).toEqual({
            sum: 11,
            entryBox: '11',
            history: '5 + 6 +',
            prevHistory: '5 + 6',
            prevAction: types.ADD
        });



    });

    it('should change history if we change type Action', ()=>{
        expect(
            reducer({
                sum: 11,
                entryBox: '11',
                history: '5 + 6 +',
                prevHistory: '5 + 6',
                prevAction: types.ADD
            }, action.substractionNumber)
        ).toEqual({
            sum: 11,
            entryBox: '11',
            history: '5 + 6 -',
            prevHistory: '5 + 6',
            prevAction: types.SUBTRACTION
        });
    })

});
