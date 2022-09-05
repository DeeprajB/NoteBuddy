import { configureStore } from '@reduxjs/toolkit';
import notesSlice from '../redux/slices/noteSlice';

export default configureStore({
  reducer: {
    notes: notesSlice,
  },
});