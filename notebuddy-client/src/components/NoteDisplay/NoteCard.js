import React from 'react'

import {
    Box, Heading, Divider, useColorModeValue, Spacer, Flex, useDisclosure
  } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

import NoteEditorModal from './NoteEditorModal'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function NoteCard({id, title, content, pinned }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue('lprimary','dprimary')
  return (
    <>
    <Box onClick={onOpen} borderRadius={15} bg={useColorModeValue('lsurface','dsurface')} 
    _hover={{
        cursor: 'pointer'
      }}>
        <Box className='no-scrollbar p-5 overflow-y-scroll' height="34.5vh">
            <Flex>
            <Heading className='mb-2 mt-1' size='lg' color={useColorModeValue('lprimary','dprimary')}>{title}</Heading>
            <Spacer />
            {pinned===true ? <StarIcon color={color} className='mt-2' w={5} h={5} /> : null}
            </Flex>
            <Divider />
            <Box className='mb-2'>
            <ReactQuill theme="bubble" readOnly value={content}/>
            </Box>
            {/* <Text className='my-2 line-clamp-3'>{content}</Text> */}
        </Box>
    </Box>
    {isOpen? <NoteEditorModal id={id} title={title} content={content} pinned={pinned} isOpen={isOpen} onClose={onClose} isAdd={0} /> : null}
    </>
  )
}

export default NoteCard