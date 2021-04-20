import PropTypes from "prop-types";
import React, { Component } from 'react';
import Email from './components/Email';
import Name from './components/Name';
class Form extends Component {
    constructor(props){
        super(props)
        this.stateHandler = this.stateHandler.bind(this)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    stateHandler({target}){
        const {name, value} = target;
        this.setState({[name]: value});
    }
    render(){
        const {updateForm} = this.props;
        const {firstName, lastName, email} = this.state;
        return (
            <div>
                <fieldset>
                    <form className='form'>
                        <Name firstName={firstName} lastName={lastName} stateHandler={this.stateHandler} />
                        <Email email={email} stateHandler={this.stateHandler} />
                    </form>
                        <button onClick={() => updateForm(this.state)} />
                </fieldset>
            </div>
        )
    }
}

Form.propTypes = {
  updateForm: PropTypes.func
}

export default Form;