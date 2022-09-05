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

  export const getNoteAsync = (page) => async (dispatch) => {
    try {
      const response = await axios.get('https://notebuddy-server.herokuapp.com/getall/'+page);
      dispatch(displayNotes(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export const { displayNotes } = notesSlice.actions;
  export const showNote = (state) => state.notes.data;
  export const showPage = (state) => state.notes.totalpage;
  export default notesSlice.reducer;