import reducer from './index';
import * as action from '../actions'
import * as types from '../constants/ActionTypes';

const initialState = {
    symbol: '',
    lastSymbol: '',
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
            symbol: '',
            lastSymbol: '',
            sum: 0,
            entryBox: '5',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });

        expect(
            reducer({
                symbol: '',
                lastSymbol: '',
                sum: 0,
                entryBox: '5',
                prevHistory: '',
                history: '',
                prevAction: types.SET_ENTRY_BOX
            }, action.setEntryBox(5))

        ).toEqual({
            symbol: '',
            lastSymbol: '',
            sum: 0,
            entryBox: '55',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });

    });

    it.only('users steps', ()=>{

        // expect(
        //     reducer({
        //         symbol: '',
        //         lastSymbol: '',
        //         sum: 0,
        //         entryBox: '5',
        //         history: '', // 5 + add
        //         prevHistory: '', // 5 + symbol
        //         prevAction: types.SET_ENTRY_BOX
        //     }, action.addNumber)
        // ).toEqual({
        //     symbol: '+',
        //     lastSymbol: types.ADD,
        //     sum: 5,
        //     entryBox: '5',
        //     history: '5 +',
        //     prevAction: types.ADD,
        //     prevHistory: '5' // history + entryBox
        // });
        //
        // expect(
        //     reducer({
        //         symbol: '+',
        //         lastSymbol: types.ADD,
        //         sum: 5,
        //         entryBox: '5',
        //         history: '5 +',
        //         prevAction: types.ADD,
        //         prevHistory: '5'
        //     }, action.setEntryBox(6))
        // ).toEqual({
        //     symbol: '+',
        //     lastSymbol: types.ADD,
        //     sum: 5,
        //     entryBox: '6',
        //     history: '5 +',
        //     prevHistory: '5',
        //     prevAction: types.SET_ENTRY_BOX
        // });

        expect(
            reducer({
                symbol: '+', // actionTypes
                lastSymbol: types.ADD,
                sum: 5,
                entryBox: '6',
                history: '5 +', // history + entryBox + types.ADD
                prevHistory: '5',
                prevAction: types.SET_ENTRY_BOX
            }, action.addNumber)

        ).toEqual({
            symbol: '+',
            lastSymbol: types.ADD,
            sum: 11,
            entryBox: '11',
            history: '5 + 6 +',
            prevHistory: '5 + 6',
            prevAction: types.ADD
        });

        // expect(
        //     reducer({
        //         symbol: '+',
        //         lastSymbol: types.ADD,
        //         sum: 11,
        //         entryBox: '11',
        //         prevHistory: '5 + 6',
        //         history: '5 + 6 +'
        //     }, action.substractionNumber)
        // ).toEqual({
        //     symbol: '-',
        //     lastSymbol: types.SUBTRACTION,
        //     sum: 11,
        //     entryBox: '11',
        //     history: '5 + 6 -'
        // });


    });

});
