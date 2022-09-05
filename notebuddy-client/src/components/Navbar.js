import React from 'react'

import {
    Box,
    Flex,
    useColorModeValue,
    Heading,
    Spacer,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';

import DarkModeSwitch from './DarkModeSwitch'
import NoteEditorModal from './NoteDisplay/NoteEditorModal';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Button className='m-3' onClick={onOpen} color={useColorModeValue('lprimary','dprimary')}>Add Note</Button>
        </Flex>
    </Box>
    {isOpen? <NoteEditorModal id={0} title={''} content={''} pinned={false} isOpen={isOpen} onClose={onClose} isAdd={1} /> : null}
    </>
  )
}

export default Navbar