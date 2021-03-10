import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions/addTask';
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newToDo: '',
    };
  }

  handleChanger = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  save = () => {
    const { addTask } = this.props;
    addTask(this.state.newToDo);
    this.setState({ newToDo: '' });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          name="newToDo"
          onChange={(event) => this.handleChanger(event)}
          value={this.state.newToDo}
        />
        <button onClick={this.save}>Save Item</button>
        {this.props.payload.map((text, index) => {
          return (
            <p onDoubleClick={() => this.props.removeTask(index)} key={index}>
              {text}
            </p>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (value) => dispatch(addTask(value)),
  removeTask: (index) => dispatch(removeTask(index)),
});
const mapStateToProps = (state) => ({
  payload: state.reducerAddTask,
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
