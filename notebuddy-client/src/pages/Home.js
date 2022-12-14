import React, {useEffect} from 'react'

import Navbar from '../components/Navbar'

import NoteCard from '../components/NoteDisplay/NoteCard'

import { SimpleGrid, Box, useColorModeValue, Heading, Center} from '@chakra-ui/react'

import { useSelector, useDispatch } from "react-redux";
import { showNotes, showPage, getNotesAsync } from "../redux/slices/noteSlice";

import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator
} from "chakra-paginator";

const  Home = () => {
  const color = useColorModeValue('lprimary','dprimary')
  const note = useSelector(showNotes);
  const totalpage = useSelector(showPage);
  const dispatch = useDispatch();
  const pagesQuantity = totalpage[0];
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 }
  });
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    dispatch(getNotesAsync(currentPage))
  }, [dispatch, currentPage]);
  return (
    <>
    <Navbar page={currentPage} />
    <Box className='mt-10 mx-6 md:mx-12 lg:mx-24'>
    {totalpage[0] === 0 ? <Center className='my-[30vh]'><Heading color={color}>Looks like your space is empty :) Add a note to make it seem like its not lonely here anymore :)</Heading></Center> : null}
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
    {note[0] && note[0].notes.map((note,index) => <NoteCard key={index} id={note.id} title={note.title} content={note.content} pinned={note.pinned} page={currentPage} />)}
    </SimpleGrid>
    <Paginator
    activeStyles={{
      w: 7,
      bg: useColorModeValue('lprimary', 'dprimary'),
      color: useColorModeValue('dsecondary','lsecondary')
    }}
    normalStyles={{
      w: 7
    }}
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <Container className='mt-5 mb-5' align="center" justify="space-between" w="full" >
          <Previous>
            Previous
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
          </Next>
        </Container>
      </Paginator>
    </Box>
    </>
  )
}

export default Home