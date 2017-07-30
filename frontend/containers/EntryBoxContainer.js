import React from 'react'
import { connect } from 'react-redux'
import EntryBox from '../components/EntryBox';

const mapStateToProps = (state) => ({
    history: state.history,
    entryBox: state.entryBox
});


const EntryBoxContainer = connect(mapStateToProps)(EntryBox);

export default EntryBoxContainer;

