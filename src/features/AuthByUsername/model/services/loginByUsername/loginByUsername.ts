import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { hashPassword } from 'shared/lib/hashPassword/hashPassword';

type LoginByUsernameProps = {
  username: string,
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      // mock login

      await new Promise((resolve) => setTimeout(resolve, 500)); // server

      const hashedPassword = await hashPassword(authData.password);

      const user: User = {
        username: authData.username,
        password: hashedPassword
      };

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
      dispatch(userActions.setAuthData(user));

      return user;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
