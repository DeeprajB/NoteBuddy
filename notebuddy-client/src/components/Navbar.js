import React from 'react'

import {
    Box,
    Flex,
    useColorModeValue,
    Heading,
    Spacer,
  } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';

import DarkModeSwitch from './DarkModeSwitch'

function Navbar() {
  return (
    <>
    <Box
    w="100%"
    className="border-b border-black z-10"
    bg={useColorModeValue('lsurface', 'dsurface')}>
        <Flex>
        <EditIcon className='my-3 ml-3 mr-2' w={9} h={9}  />
        <Heading size='md' className='mt-5'>NoteBuddy</Heading>
        <Spacer />
        <DarkModeSwitch />
        </Flex>
    </Box>
    </>
  )
}

export default Navbar