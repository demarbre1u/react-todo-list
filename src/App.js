import React from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, message: 'Make a todo-list', done: true},
        {id: 2, message: 'Make it checkable', done: true},
        {id: 3, message: 'Make it so that you can add items', done: false},
        {id: 4, message: 'Make it so that you can remove items', done: false},
        {id: 5, message: 'Style it', done: false},
      ], 
      taskName: ''
    }
  }

  render() {
    return (
      <div className="App">
        <p>Todo-list :</p>

        <ul>
          {this.state.tasks.map(task => (
            <li key={task.id} className={task.done ? 'overlined' : ''} > 
              {task.message} 
              <input onClick={() => this.checkTask(task.id)} type="checkbox" defaultChecked={task.done && 'checked'}></input>
            </li>
          ))}
        </ul>

        <form onSubmit={event => this.addTask(event)}>
          <input type="text" name="taskLabel" value={this.state.taskName} onChange={event => this.typeTaskName(event)} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }

  typeTaskName(event) {
    this.setState({ taskName: event.target.value})
  }

  checkTask(taskId) {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === taskId) {
        task.done = !task.done;
      }

      return task;
    });

    this.setState({tasks: updatedTasks})
  }

  addTask(event) {
    event.preventDefault();

    const newTask = {id: uuidv4(), message: this.state.taskName, done: false};
    const taskList = [...this.state.tasks, newTask];

    this.setState({ tasks: taskList, taskName: '' });
  }
}

export default App;
