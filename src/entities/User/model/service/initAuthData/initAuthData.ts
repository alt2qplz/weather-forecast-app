import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const initAuthData = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) return JSON.parse(user);
      else return rejectWithValue('error');
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);