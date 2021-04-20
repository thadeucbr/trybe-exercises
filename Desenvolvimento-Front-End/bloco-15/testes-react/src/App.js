import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      storedEmail: '',
    };
  }

  saveEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  changeState() {
    const { email } = this.state;
    this.setState({ storedEmail: email });
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(event) => this.saveEmail(event)}
          />
          <input type="button" value="Salvar" onClick={() => this.changeState()} />
        </form>
        <p>{this.state.storedEmail}</p>
      </div>
    );
  }
}

export default App;
