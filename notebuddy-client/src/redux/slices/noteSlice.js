import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        data:[],
        totalpage: 0,
    },
    reducers: {
      displayNotes: (state, action) => {
        state.data = [action.payload];
        state.totalpage = [action.payload.pageCount];
      },
    },
  });

export const addNoteAsync = (title,content,pinned,toast) => async () => {
    try {
      const header = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const note = JSON.stringify({ title: title, content:content, pinned:pinned });
      const response = await axios.post('https://notebuddy-server.herokuapp.com/create',note,header);
      toast({
        title: 'Note Succesfully Added.',
        description: "The Note was succesfully added with response "+response.status,
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: 'Note Failed to Add.',
        description: "Cant submit with empty body.",
        position: 'top',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      throw new Error(err);
    }
  };

export const getNotesAsync = (page) => async (dispatch) => {
    try {
      const response = await axios.get('https://notebuddy-server.herokuapp.com/getall/'+page);
      dispatch(displayNotes(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };

export const updateNoteAsync = (id,title,content,pinned,toast) => async () => {
    try {
      const header = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const note = JSON.stringify({ title: title, content:content, pinned:pinned });
      const response = await axios.patch('https://notebuddy-server.herokuapp.com/note/'+id,note,header);
      toast({
        title: 'Note Succesfully Updated.',
        description: "The Note was succesfully updated with response "+response.status,
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: 'Note Failed to Update.',
        description: err,
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
      throw new Error(err);
    }
  };

export const deleteNoteAsync = (id,toast) => async () => {
    try {
      const response = await axios.delete('https://notebuddy-server.herokuapp.com/note/'+id);
      toast({
        title: 'Note Succesfully Deleted.',
        description: "The Note was succesfully deleted with response "+response.status,
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: 'Note Failed to Delete.',
        description: err,
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
      throw new Error(err);
    }
  };

  
  export const { displayNotes } = notesSlice.actions;
  export const showNotes = (state) => state.notes.data;
  export const showPage = (state) => state.notes.totalpage;
  export default notesSlice.reducer;