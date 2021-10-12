import React from 'react';

import { Text, ListItem, Checkbox, Stack, Button } from "@chakra-ui/react";

class TodolistItem extends React.Component {
    render() {
        return (
            <ListItem> 
                <Stack direction="row">
                    <Button onClick={() => this.props.deleteTask(this.props.task.id)} colorScheme="blue" size="xs">X</Button>
                    <Checkbox onChange={() => this.props.checkTask(this.props.task.id)} size="lg" colorScheme="green" defaultChecked={this.props.task.done} />
                    <Text isTruncated as={this.props.task.done ? 'del' : ''}>{this.props.task.message}</Text>
                </Stack>
            </ListItem>
        );
    }
}

export default TodolistItem;