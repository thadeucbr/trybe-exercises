import React from 'react';
import TodoList from './page/TodoList';
import { Provider } from 'react-redux';
import store from './store';
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;
