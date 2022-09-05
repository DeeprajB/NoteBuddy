import React from 'react'

import {
    Box, Heading, Divider, Text, useColorModeValue, Spacer, Flex, useDisclosure
  } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

import NoteEditorModal from './NoteEditorModal'

function NoteCard({id, title, content, pinned }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue('lprimary','dprimary')
  return (
    <>
    <Box onClick={onOpen} borderRadius={15} bg={useColorModeValue('lsurface','dsurface')} 
    _hover={{
        cursor: 'pointer'
      }}>
        <Box className='p-5' height="250px">
            <Flex>
            <Heading className='mb-2 mt-1' size='lg' color={useColorModeValue('lprimary','dprimary')}>{title}</Heading>
            <Spacer />
            {pinned===true ? <StarIcon color={color} className='mt-2' w={5} h={5} /> : null}
            </Flex>
            <Divider />
            <Text className='my-2'>{content}</Text>
        </Box>
    </Box>
    {isOpen? <NoteEditorModal id={id} title={title} content={content} pinned={pinned} isOpen={isOpen} onClose={onClose} isAdd={0} /> : null}
    </>
  )
}

export default NoteCard