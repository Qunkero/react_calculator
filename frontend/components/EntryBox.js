import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div id='entrybox' className='text-right'>
                <div id='entry'>
                    <p id='answer'>{this.props.entryBox}</p>
                </div>
                <div id='history'>
                    <p>{this.props.history}</p>
                </div>
            </div>
        )
    }
}