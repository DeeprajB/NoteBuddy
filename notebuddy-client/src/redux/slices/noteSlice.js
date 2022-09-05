import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        data:[],
        totalpage: 0
    },
    reducers: {
      displayNotes: (state, action) => {
        state.data = [action.payload];
        state.totalpage = [action.payload.pageCount];
      },
    },
  });

export const addNoteAsync = (title,content,pinned) => async () => {
    try {
      const header = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const note = JSON.stringify({ title: title, content:content, pinned:pinned });
      const response = await axios.post('https://notebuddy-server.herokuapp.com/create',note,header);
      console.log(response)
    } catch (err) {
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

export const updateNoteAsync = (id,title,content,pinned) => async () => {
    try {
      const header = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const note = JSON.stringify({ title: title, content:content, pinned:pinned });
      const response = await axios.patch('https://notebuddy-server.herokuapp.com/note/'+id,note,header);
      console.log(response)
    } catch (err) {
      throw new Error(err);
    }
  };

export const deleteNoteAsync = (id) => async () => {
    try {
      const response = await axios.delete('https://notebuddy-server.herokuapp.com/note/'+id);
      console.log(response)
    } catch (err) {
      throw new Error(err);
    }
  };

  
  export const { displayNotes } = notesSlice.actions;
  export const showNotes = (state) => state.notes.data;
  export const showPage = (state) => state.notes.totalpage;
  export default notesSlice.reducer;