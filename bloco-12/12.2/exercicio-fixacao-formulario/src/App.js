import { Component } from 'react';
import './App.css';
import ShowUser from './components/ShowUser';
import Form from './FormExercicio';
class App extends Component {
  constructor(props) {
    super(props);
    this.updateForm = this.updateForm.bind(this);
    this.state = {
      user: {
        firstName: '',
        lastname: '',
        email: '',
      },
    };
  }
  updateForm(state) {
    this.setState({user: state})
  }
  render() {
    const { firstName, lastName, email } = this.state.user;
    return (
      <div className="App">
        <Form updateForm={this.updateForm} />
        <ShowUser firstName={firstName} lastName={lastName} email={email} />
      </div>
    );
  }
}

export default App;
