import React, {Component} from 'react';

export default class ButtonsComponents extends Component {

    render() {
        return (
            <div id="buttons">
                <button className='red' onClick={()=>{this.props.allClean()}}>AC</button>
                <button className='red' value='ce'>CE</button>
                <button value='/'>&divide;</button>
                <button value='*'>x</button>

                <button onClick={()=>{this.props.setEntryBox(7)}}>7</button>
                <button onClick={()=>{this.props.setEntryBox(8)}}>8</button>
                <button onClick={()=>{this.props.setEntryBox(9)}}>9</button>
                <button onClick={()=>{this.props.subtractionNumber()}}>-</button>

                <button onClick={()=>{this.props.setEntryBox(4)}}>4</button>
                <button onClick={()=>{this.props.setEntryBox(5)}}>5</button>
                <button onClick={()=>{this.props.setEntryBox(6)}}>6</button>
                <button onClick={()=>{this.props.addNumber()}}>+</button>


                <button onClick={()=>{this.props.setEntryBox(1)}}>1</button>
                <button onClick={()=>{this.props.setEntryBox(2)}}>2</button>
                <button onClick={()=>{this.props.setEntryBox(3)}}>3</button>
                <button className='invisible'>N</button>

                <button id='zeroButton' onClick={()=>{this.props.setEntryBox(0)}}>0</button>
                <button onClick={()=>{this.props.setEntryBox('.')}}>.</button>
                <button id='equalButton' onClick={()=>{this.props.getResult()}}>=</button>
            </div>
        )
    }
}



