import React from 'react'
import { connect } from 'react-redux'
import ButtonsComponents from '../components/ButtonsComponents';
import * as actions from '../actions/index';


const mapDispatchToProps = {
    add: actions.addNumber,
    subtraction: actions.subtractionNumber,
    setNumber: actions.setEntryBox
};

const ButtonContainer = connect(null, mapDispatchToProps)(ButtonsComponents);

export default ButtonContainer;

