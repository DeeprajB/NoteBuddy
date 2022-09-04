import React from 'react'

import {
    Box, Heading, Divider, Text, useColorModeValue, Spacer, Flex, useDisclosure
  } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

import NoteEditorModal from './NoteEditorModal'

function NoteCard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box onClick={onOpen} borderRadius={15} bg={useColorModeValue('lsurface','dsurface')} 
    _hover={{
        cursor: 'pointer'
      }}>
        <Box className='p-5'>
            <Flex>
            <Heading className='mb-2 mt-1' size='lg' color={useColorModeValue('lprimary','dprimary')}>Card Title</Heading>
            <Spacer />
            <StarIcon color={useColorModeValue('lprimary','dprimary')} className='mt-2' w={5} h={5} />
            </Flex>
            <Divider />
            <Text className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, voluptatum, voluptas labore placeat voluptate aut, cupiditate maiores ab pariatur sunt dolorem ipsam nisi delectus libero ea molestiae aliquam autem!</Text>
        </Box>
    </Box>
    <NoteEditorModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default NoteCard