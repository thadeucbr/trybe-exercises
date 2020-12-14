import React, { Component } from 'react';

class Email extends Component {
    render(){
        const {email, stateHandler} = this.props;
        return (
            <div>
                <input type='email' name='email' value={email} onChange={stateHandler} />
            </div>
        )
    }
}

export default Email;