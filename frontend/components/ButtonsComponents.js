import React, {Component} from 'react';

export default class ButtonsComponents extends Component {

    render() {
        return (
            <div id="buttons">
                <button className='red' value='ac'>AC</button>
                <button className='red' value='ce'>CE</button>
                <button value='/'>&divide;</button>
                <button value='*'>x</button>

                <button value='7'>7</button>
                <button value='8'>8</button>
                <button value='9'>9</button>
                <button value='-'>-</button>

                <button value='4'>4</button>
                <button value='5'>5</button>
                <button value='6'>6</button>
                <button value='+'>+</button>


                <button value='1'>1</button>
                <button value='2'>2</button>
                <button value='3'>3</button>
                <button className='invisible'>N</button>

                <button id='zeroButton' value='0'>0</button>
                <button value='.'>.</button>
                <button id='equalButton' value='='>=</button>
            </div>
        )
    }
}



