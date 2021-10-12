import React from 'react';

class TodolistItem extends React.Component {
    render() {
        return (
            <li className={this.props.task.done ? 'overlined' : ''} > 
                {this.props.task.message} 
                <input onClick={() => this.props.checkTask(this.props.task.id)} type="checkbox" defaultChecked={this.props.task.done && 'checked'}></input>
                <button onClick={() => this.props.deleteTask(this.props.task.id)}>x</button>
            </li>
        );
    }
}

export default TodolistItem;