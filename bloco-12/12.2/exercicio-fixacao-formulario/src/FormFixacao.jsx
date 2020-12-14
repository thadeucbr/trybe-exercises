import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comidaFavorita: '',
      receitaFavorita: '',
      jaComeu: false,
    };
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="food">Comida favorita:</label>
            <select
              name="comidaFavorita"
              id="food"
              onChange={this.handleChange}>
              <option value="hamburguer">Hamburguer</option>
              <option value="japonesa">Japonesa</option>
              <option value="brasileira">Brasileira</option>
              <option value="italiana">Italiana</option>
            </select>
            <div>
              <label htmlFor="receita">Sua receita favorita</label>
              <textarea
                name="receitaFavorita"
                id="receita"
                onChange={this.handleChange}></textarea>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="jaComeu">Já comeu hoje?</label>
              <input
                type="checkbox"
                name="jaComeu"
                id="jaComeu"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input type="file"></input>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
