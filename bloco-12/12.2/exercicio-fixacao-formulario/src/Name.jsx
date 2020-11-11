import React, { Component } from 'react';

class Name extends Component {
    render(){
        const { value, stateHandler } = this.props;
        return (
            <div>
                    <input type='text' name='name' onChange={stateHandler} value={value}></input>
            </div>
        )
    }
}

export default Name;