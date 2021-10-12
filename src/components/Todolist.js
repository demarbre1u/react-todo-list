import React from "react";

import TodolistItem from '../components/TodolistItem';

import { 
    Box, 
    Button, 
    Input, 
    InputGroup, 
    InputRightElement, 
    List, 
    Divider, 
    Heading, 
    Container, 
    Text 
} from "@chakra-ui/react";

import { v4 as uuidv4 } from 'uuid';

class Todolist extends React.Component {
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

    render() {
        return (
            <Container>
                <Box m="4" maxW="md" borderWidth="1px" borderRadius="1px">
                    <Heading m="2" textAlign="center" size="md">Todo-list</Heading>

                    <Divider />

                    <List spacing={2} m="2">
                        {this.state.tasks && this.state.tasks.map(task => (
                            <TodolistItem key={task.id} task={task} checkTask={taskId => this.checkTask(taskId)} deleteTask={taskId => this.deleteTask(taskId)} />
                        ))}

                        {this.state.tasks.length === 0 && <Text color="grey">There are no tasks yet</Text>}
                    </List>

                    <Divider />

                    <Box m="2">
                        <form onSubmit={event => this.addTask(event)}>
                            <InputGroup>
                                <Input placeholder="Enter new task" name="taskLabel" onChange={event => this.typeTaskName(event)} value={this.state.taskName} isRequired />

                                <InputRightElement>
                                <Button mr="1" h="1.75rem" size="sm" type="submit" colorScheme="blue">Add</Button>
                                </InputRightElement>
                            </InputGroup>
                        </form>
                    </Box>
                </Box>
            </Container>
        );
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

export default Todolist;