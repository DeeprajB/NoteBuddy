import React from 'react'

import Navbar from '../components/Navbar'

import NoteCard from '../components/NoteDisplay/NoteCard'

import { Grid, Box } from '@chakra-ui/react'

function Home() {
  return (
    <>
    <Navbar />
    <Box className='mt-10 mx-24'>
    <Grid templateColumns='repeat(3, 1fr)' gap={10}>
    <NoteCard />
    <NoteCard />
    <NoteCard />
    <NoteCard />
    <NoteCard />
    <NoteCard />
    </Grid>
    </Box>
    </>
  )
}

export default Home