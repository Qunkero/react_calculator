import React from 'react'
import { connect } from 'react-redux'
import ButtonsComponents from '../components/ButtonsComponents';
import * as actions from '../actions/index';

const ButtonContainer = connect(null, actions)(ButtonsComponents);

export default ButtonContainer;

