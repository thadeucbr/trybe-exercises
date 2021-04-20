import React, { Component } from 'react';

class ShowUser extends Component {
    render(){
        const {firstName, lastName, email} = this.props;
        return (
            <div>
                <h1>Hello {firstName} {lastName}</h1>
                <h4>{email}</h4>
            </div>
        )
    }
}

export default ShowUser;