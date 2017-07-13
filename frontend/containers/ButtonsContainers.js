import React from 'react'
import { connect } from 'react-redux'
import ButtonsComponents from '../components/ButtonsComponents';


let ButtonContainer = () =>{
    return <ButtonsComponents/>
};



ButtonContainer = connect()(ButtonContainer);

export default ButtonContainer;

