import React, { Component } from 'react';
import Name from './Name';
class Form extends Component {
    constructor(props){
        super(props)
        this.stateHandler = this.stateHandler.bind(this);
        this.state = {
            email: '',
            name: ''
        }
    }
    stateHandler({target}){
        const {name, value} = target;
        this.setState({[name]: value})
    }
    render(){
        return (
            <div>
                <fieldset>
                    <form>
                        <Name value={this.state.name} stateHandler={this.stateHandler} />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default Form;