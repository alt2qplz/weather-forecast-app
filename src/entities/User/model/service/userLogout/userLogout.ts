import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const userLogout = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'user/userLogout',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);

      return;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);