import { createSlice } from '@reduxjs/toolkit';
import { addMessage } from './operations';


export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: [],
    isLoading: false,
    error: null,
  },

[addMessage.pending](state) {
    state.isLoading = true;
  },
  [addMessage.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  },
  [addMessage.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },

});

