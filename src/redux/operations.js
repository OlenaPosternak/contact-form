import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://contactform-b6no.onrender.com/';

export const addMessage = createAsyncThunk(
  'message/addMessage',
  async (message, thunkAPI) => {
 
    const { name, email, info } = message;

    try {
      const response = await axios.post('/', {
        name,
        email,
        info,
      });
      console.log(`response`, response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);