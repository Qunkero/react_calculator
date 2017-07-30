import React from 'react';
import Title from './Title';
import ButtonsContainers from '../containers/ButtonsContainers';
import EntryBoxContainer from '../containers/EntryBoxContainer'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div id='calculator'>
                        <Title/>
                        <EntryBoxContainer/>
                        <ButtonsContainers/>
                    </div>
                </div>
            </div>
        )
    }
}