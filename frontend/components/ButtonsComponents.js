import React, {Component} from 'react';

export default class ButtonsComponents extends Component {

    render() {
        console.log(this);
        return (
            <div id="buttons">
                <button className='red' value='ac'>AC</button>
                <button className='red' value='ce'>CE</button>
                <button value='/'>&divide;</button>
                <button value='*'>x</button>

                <button onClick={()=>{this.props.setNumber(7)}}>7</button>
                <button onClick={()=>{this.props.setNumber(8)}}>8</button>
                <button onClick={()=>{this.props.setNumber(9)}}>9</button>
                <button onClick={()=>{this.props.subtraction()}}>-</button>

                <button onClick={()=>{this.props.setNumber(4)}}>4</button>
                <button onClick={()=>{this.props.setNumber(5)}}>5</button>
                <button onClick={()=>{this.props.setNumber(6)}}>6</button>
                <button onClick={()=>{this.props.add()}}>+</button>


                <button onClick={()=>{this.props.setNumber(1)}}>1</button>
                <button onClick={()=>{this.props.setNumber(2)}}>2</button>
                <button onClick={()=>{this.props.setNumber(3)}}>3</button>
                <button className='invisible'>N</button>

                <button id='zeroButton' value='0'>0</button>
                <button value='.'>.</button>
                <button id='equalButton' value='='>=</button>
            </div>
        )
    }
}



