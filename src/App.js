import React from 'react';
import './App.css';

import TodolistItem from './components/TodolistItem';

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, message: 'Make a todo-list', done: true},
        {id: 2, message: 'Make it checkable', done: true},
        {id: 3, message: 'Make it so that you can add items', done: true},
        {id: 4, message: 'Make it so that you can remove items', done: true},
        {id: 5, message: 'Style it', done: false},
      ], 
      taskName: ''
    }
  }

  /**
   * Renders the component
   */
  render() {
    return (
      <div>
        <p>Todo-list :</p>

        <ul>
          {this.state.tasks.map(task => (
            <TodolistItem key={task.id} task={task} checkTask={taskId => this.checkTask(taskId)} deleteTask={taskId => this.deleteTask(taskId)} />
          ))}
        </ul>

        <form onSubmit={event => this.addTask(event)}>
          <input type="text" name="taskLabel" value={this.state.taskName} onChange={event => this.typeTaskName(event)} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }

  /**
   * Replaces the taskName whenever a taskname id being typed
   * 
   * @param {string} event 
   *    The event triggered when typing
   */
  typeTaskName(event) {
    this.setState({ taskName: event.target.value });
  }

  /**
   * Checks off the list a given task
   * 
   * @param {string} taskId 
   *    The task to be checked off
   */
  checkTask(taskId) {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === taskId) {
        task.done = !task.done;
      }

      return task;
    });

    this.setState({tasks: updatedTasks});
  }

  /**
   * Deletes a given task from the list
   * 
   * @param {string} taskId 
   *    The task to be deleted
   */
  deleteTask(taskId) {
    const updatedTasks = this.state.tasks.filter(task => task.id !== taskId);

    this.setState({ tasks: updatedTasks });
  }

  /**
   * Adds a task to the list when the task form is submitted
   * 
   * @param {*} event 
   *    The event triggered when the task form is submitted
   */
  addTask(event) {
    event.preventDefault();

    const newTask = {id: uuidv4(), message: this.state.taskName, done: false};
    const taskList = [...this.state.tasks, newTask];

    this.setState({ tasks: taskList, taskName: '' });
  }
}

export default App;
