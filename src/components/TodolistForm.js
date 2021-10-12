import React from "react";

import {
    Box, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Button
} from '@chakra-ui/react';

class TodolistForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { taskName: '' };
    }

    render() {
        return (
            <Box m="2">
                <form onSubmit={event => this.onTaskSubmit(event) }>
                    <InputGroup>
                        <Input placeholder="Enter new task" name="taskLabel" onChange={event => this.typeTaskName(event)} value={this.state.taskName} isRequired />

                        <InputRightElement>
                            <Button mr="1" h="1.75rem" size="sm" type="submit" colorScheme="blue">Add</Button>
                        </InputRightElement>
                    </InputGroup>
                </form>
            </Box>
        );
    }

    /**
     * When the form is submitted to add a new task
     * 
     * @param {*} event 
     *      The event fired whenever the form is submitted
     */
    onTaskSubmit(event) {
        event.preventDefault();

        this.props.addTask(this.state.taskName);
        this.setState({taskName: ''});
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
}

export default TodolistForm;