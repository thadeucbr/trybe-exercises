import React, { Component } from 'react';
import propTypes from 'prop-types';
class Name extends Component {
  render() {
    const { firstName, lastName, stateHandler } = this.props;
    return (
      <div className="name">
        <h4>Nome e Sobrenome</h4>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={stateHandler}
          placeholder="Nome"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={stateHandler}
          placeholder="Sobrenome"
        />
      </div>
    );
  }
}

Name.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
};
export default Name;
