import React, {useState} from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    IconButton,
    Button,
    Box,
    useColorModeValue,
    Editable,
    EditableInput,
    EditablePreview,
    Tooltip,
    Input,
    Flex,
    Heading,
    Divider,
    Spacer
  } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

function NoteEditorModal({isOpen, onClose}) {
  const [value, setValue] = useState('');
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside' closeOnOverlayClick={false} >
        <ModalOverlay />
        <ModalContent borderRadius={15} className='m-10'>
          <ModalHeader>
            <Flex>
            <Editable as={Heading} size='xs' placeholder='Title' isPreviewFocusable={true} selectAllOnFocus={false} color={useColorModeValue('lprimary','dprimary')}>
            <Tooltip label="Click to edit" color={useColorModeValue('dsecondary','lsecondary')} >
            <EditablePreview
                py={2}
                px={4}
                _hover={{
                background: useColorModeValue("lbg", "dbg"),
                }}
            />
            </Tooltip>
            <Input py={2} px={4} as={EditableInput} focusBorderColor={useColorModeValue('lprimary','dprimary')} />
          </Editable>
          <Spacer />
          <IconButton colorScheme='green' className='mt-2.5' aria-label='Pin' icon={<StarIcon />} />
          </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody >
            <Box className='quilleditor mt-8' bg={useColorModeValue('lbg','dbg')} borderRadius={10}>
                <ReactQuill bounds=".quilleditor" theme="bubble" value={value} onChange={setValue} placeholder="Type away your thoughts ....."/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' onClick={onClose}>
              Save
            </Button>
            <Button className='ml-2' colorScheme='red' onClick={onClose}>
              Delete
            </Button>
            <Button className='ml-2' colorScheme='gray' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default NoteEditorModal