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
    Input,
    Flex,
    Heading,
    Divider,
    Spacer
  } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

import { useDispatch } from "react-redux";
import { updateNoteAsync, deleteNoteAsync, addNoteAsync } from "../../redux/slices/noteSlice";

function NoteEditorModal({id, title, content, pinned, isOpen, onClose, isAdd}) {
  const dispatch = useDispatch();
  const [titlevalue, setTitleValue] = useState(title);
  const [contentvalue, setContentValue] = useState(content);
  const [pinnedvalue, setPinnedValue] = useState(pinned);
  const handlePinned = () => {
    setPinnedValue(current => !current);
  };
  const handleUpdate = () => {
    dispatch(updateNoteAsync(id,titlevalue,contentvalue,pinnedvalue));
  };
  const handleCreate = () => {
    dispatch(addNoteAsync(titlevalue,contentvalue,pinnedvalue));
  };
  const handleDelete = () => {
    dispatch(deleteNoteAsync(id));
    onClose()
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside' closeOnOverlayClick={false} >
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)' />
        <ModalContent borderRadius={15} className='m-10'>
          <ModalHeader>
            <Flex>
            <Editable as={Heading} value={titlevalue} onChange={setTitleValue} size='xs' placeholder='Title' isPreviewFocusable={true} selectAllOnFocus={false} color={useColorModeValue('lprimary','dprimary')}>
            <EditablePreview
                py={2}
                px={4}
                _hover={{
                background: useColorModeValue("lbg", "dbg"),
                }}
            />
            <Input py={2} px={4} as={EditableInput} focusBorderColor={useColorModeValue('lprimary','dprimary')} />
          </Editable>
          <Spacer />
          <IconButton onClick={handlePinned} colorScheme={pinnedvalue ? 'purple' : 'gray'} className='mt-1' aria-label='Pin' icon={<StarIcon />} />
          </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody >
            <Box className='quilleditor mt-8' bg={useColorModeValue('lbg','dbg')} borderRadius={10}>
                <ReactQuill bounds=".quilleditor" theme="bubble" value={contentvalue} onChange={setContentValue} placeholder="Type away your thoughts ....."/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='purple' onClick={isAdd? handleCreate : handleUpdate}>
              Save
            </Button>
            <Button isDisabled={isAdd} className='ml-2' colorScheme='red' onClick={handleDelete}>
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