import React from "react";

import TodolistItem from '../components/TodolistItem';
import TodolistForm from "./TodolistForm";

import { 
    Box, 
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
                {id: 1, message: 'Add new tasks!', done: false},
            ]
        };
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

                        {this.state.tasks.length === 0 && <Text textAlign="center" color="grey">There are no tasks yet</Text>}
                    </List>

                    <Divider />

                    <TodolistForm addTask={ task => this.addTask(task) } />
                </Box>
            </Container>
        );
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
     * @param {*} taskName 
     *    The task to be added
     */
    addTask(taskName) {
        const newTask = {id: uuidv4(), message: taskName, done: false};
        const taskList = [...this.state.tasks, newTask];

        this.setState({ tasks: taskList });
    }
}

export default Todolist;