import reducer from './index';
import * as action from '../actions'
import * as types from '../constants/ActionTypes';

const initialState = {
    actionForUse: '',
    prevAction: '',
    prevSum: 0,
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

    it('should set up initial state', ()=>{

        expect(
            reducer({
                sum: 5,
                actionForUse: '',
                entryBox: '5',
                prevHistory: '',
                history: '',
                prevAction: types.SET_ENTRY_BOX
            }, action.allClean())
        ).toEqual(initialState);

    });

    it('should set_ENTRY_BOX', ()=>{

        expect(
            reducer(initialState, action.setEntryBox(5))
        ).toEqual({
            prevSum: 0,
            sum: 5,
            actionForUse: '',
            entryBox: '5',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });

        expect(
            reducer({
                prevSum: 0,
                sum: 5,
                actionForUse: '',
                entryBox: '5',
                prevHistory: '',
                history: '',
                prevAction: types.SET_ENTRY_BOX
            }, action.setEntryBox(5))
        ).toEqual({
            prevSum: 0,
            sum: 55,
            actionForUse: '',
            entryBox: '55',
            prevHistory: '',
            history: '',
            prevAction: types.SET_ENTRY_BOX
        });



    });

    it('identical actions', ()=>{

        expect(
            reducer(initialState, action.setEntryBox(5))
        ).toEqual({
            prevSum: 0,
            sum: 5,
            actionForUse: '',
            entryBox: '5',
            history: '',
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: '' // history + entryBox
        });

        expect(
            reducer({
                sum: 5,
                actionForUse: '',
                entryBox: '5',
                history: '',
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: '' // history + entryBox
            }, action.addNumber())
        ).toEqual({
            prevSum: 5,
            sum: 5,
            actionForUse: types.ADD,
            entryBox: '5',
            history: '5 +',
            prevAction: types.ADD,
            prevHistory: '5' // history + entryBox
        });

        expect(
            reducer({
                prevSum: 5,
                sum: 5,
                actionForUse: types.ADD,
                entryBox: '5',
                history: '5 +',
                prevAction: types.ADD,
                prevHistory: '5' // history + entryBox
            }, action.setEntryBox(6))
        ).toEqual({
            prevSum: 5,
            sum: 11,
            actionForUse: types.ADD,
            entryBox: '6',
            history: '5 +',
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: '5' // history + entryBox
        });

        expect(
            reducer({
                prevSum: 11,
                sum: 11,
                actionForUse: types.ADD,
                entryBox: '6',
                history: '5 +',
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: '5' // history + entryBox
            }, action.addNumber())
        ).toEqual({
            prevSum: 11,
            sum: 11,
            actionForUse: types.ADD,
            entryBox: '11',
            history: '5 + 6 +',
            prevAction: types.ADD,
            prevHistory: '5 + 6' // history + entryBox
        });



    });

    it.only('should change history if we change type Action', ()=>{
        expect(
            reducer({
                prevSum:5,
                sum: 11,
                actionForUse: types.ADD,
                entryBox: '11',
                history: '5 + 6 +',
                prevAction: types.ADD,
                prevHistory: '5 + 6' // history + entryBox
            }, action.subtractionNumber())
        ).toEqual({
            prevSum:11,
            sum: 11,
            actionForUse: types.SUBTRACTION,
            entryBox: '11',
            history: '5 + 6 -',
            prevAction: types.SUBTRACTION,
            prevHistory: '5 + 6' // history + entryBox
        });

        expect(
            reducer({
                prevSum:11,
                sum: 11,
                actionForUse: types.SUBTRACTION,
                entryBox: '11',
                history: '5 + 6 -',
                prevAction: types.SUBTRACTION,
                prevHistory: '5 + 6' // history + entryBox
            }, action.addNumber())
        ).toEqual({
            prevSum:11,
            sum: 11,
            actionForUse: types.ADD,
            entryBox: '11',
            history: '5 + 6 +',
            prevAction: types.ADD,
            prevHistory: '5 + 6' // history + entryBox
        });
    });

    it('the same action twice', ()=>{

        expect(
            reducer({
                prevSum: 6,
                sum: 11,
                actionForUse: types.SUBTRACTION,
                entryBox: '11',
                history: '5 + 6 -',
                prevAction: types.SUBTRACTION,
                prevHistory: '5 + 6' // history + entryBox
            }, action.subtractionNumber())

        ).toEqual({
            prevSum: 11,
            sum: 11,
            actionForUse: types.SUBTRACTION,
            entryBox: '11',
            history: '5 + 6 -',
            prevAction: types.SUBTRACTION,
            prevHistory: '5 + 6' // history + entryBox
        });


    });

    it('negative compute', ()=>{
        expect(
            reducer({
                prevSum: 0,
                sum: 5,
                actionForUse: '',
                entryBox: '5',
                history: '',
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: '' // history + entryBox
            }, action.subtractionNumber())
        ).toEqual({
            prevSum: 5,
            sum: 5,
            actionForUse: types.SUBTRACTION,
            entryBox: '5',
            history: '5 -',
            prevAction: types.SUBTRACTION,
            prevHistory: '5' // history + entryBox
        });

        expect(
            reducer({
                prevSum: 5,
                sum: 5,
                actionForUse: types.SUBTRACTION,
                entryBox: '5',
                history: '5 -',
                prevAction: types.SUBTRACTION,
                prevHistory: '5' // history + entryBox
            }, action.setEntryBox(6))
        ).toEqual({
            prevSum: 5,
            sum: -1,
            actionForUse: types.SUBTRACTION,
            entryBox: '6',
            history: '5 -',
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: '5' // history + entryBox
        });


        expect(
            reducer({
                prevSum: 5,
                sum: -1,
                actionForUse: types.SUBTRACTION,
                entryBox: '6',
                history: '5 -',
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: '5' // history + entryBox
            }, action.addNumber())
        ).toEqual({
            prevSum: -1,
            sum: -1,
            actionForUse: types.ADD,
            entryBox: '-1',
            history: '5 - 6 +',
            prevAction: types.ADD,
            prevHistory: '5 - 6' // history + entryBox
        });
    });

    it('sum big number', ()=>{
        expect(
            reducer({
                prevSum: 11,
                actionForUse: "ADD",
                entryBox: "11",
                history: "11 +",
                prevAction: "ADD",
                prevHistory: "11",
                sum: 11
            }, action.setEntryBox(4))
        ).toEqual({
            prevSum: 11,
            actionForUse: "ADD",
            entryBox: "4",
            history: "11 +",
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: "11",
            sum: 15
        });

        expect(
            reducer({
                prevSum: 11,
                actionForUse: "ADD",
                entryBox: "4",
                history: "11 +",
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: "11",
                sum: 15
            }, action.setEntryBox(4))
        ).toEqual({
            prevSum: 11,
            actionForUse: "ADD",
            entryBox: "44",
            history: "11 +",
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: "11",
            sum: 55
        });

        expect(
            reducer({
                prevSum: 8,
                actionForUse: "ADD",
                entryBox: "6",
                history: "5 + 3 +",
                prevAction: types.SET_ENTRY_BOX,
                prevHistory: "5 + 3",
                sum: 14
            }, action.setEntryBox(6))
        ).toEqual({
            prevSum: 8,
            actionForUse: "ADD",
            entryBox: "66",
            history: "5 + 3 +",
            prevAction: types.SET_ENTRY_BOX,
            prevHistory: "5 + 3",
            sum: 74
        });

    })
});
