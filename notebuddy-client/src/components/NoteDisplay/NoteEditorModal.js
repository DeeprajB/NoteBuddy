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

import { useDispatch } from "react-redux";
import { updateNoteAsync, deleteNoteAsync } from "../../redux/slices/noteSlice";

function NoteEditorModal({id, title, content, pinned, isOpen, onClose}) {
  const dispatch = useDispatch();
  const [titlevalue, setTitleValue] = useState(title);
  const [contentvalue, setContentValue] = useState(content);
  const [pinnedvalue, setPinnedValue] = useState(pinned);
  const handlePinned = () => {
    setPinnedValue(current => !current);
  };
  const handleSubmit = () => {
    dispatch(updateNoteAsync(id,titlevalue,contentvalue,pinnedvalue));
  };
  const handleDelete = () => {
    dispatch(deleteNoteAsync(id));
    onClose()
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside' closeOnOverlayClick={false} >
        <ModalOverlay />
        <ModalContent borderRadius={15} className='m-10'>
          <ModalHeader>
            <Flex>
            <Editable as={Heading} value={titlevalue} onChange={setTitleValue} size='xs' placeholder='Title' isPreviewFocusable={true} selectAllOnFocus={false} color={useColorModeValue('lprimary','dprimary')}>
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
          <IconButton onClick={handlePinned} colorScheme={pinnedvalue ? 'green' : 'gray'} className='mt-2.5' aria-label='Pin' icon={<StarIcon />} />
          </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody >
            <Box className='quilleditor mt-8' bg={useColorModeValue('lbg','dbg')} borderRadius={10}>
                <ReactQuill bounds=".quilleditor" theme="bubble" value={contentvalue} onChange={setContentValue} placeholder="Type away your thoughts ....."/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' onClick={handleSubmit}>
              Save
            </Button>
            <Button className='ml-2' colorScheme='red' onClick={handleDelete}>
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