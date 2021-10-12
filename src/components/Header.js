import React from 'react';

import { Box, Heading } from "@chakra-ui/react"


class Header extends React.Component {
    render() {
        return (
            <Box bg="steelblue" color="white">
            <Heading p="3" size="lg">ReactJS Todo-list</Heading>
            </Box>
        )
    }
}

export default Header;