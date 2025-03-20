import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { initAuthData } from '../service/initAuthData/initAuthData';
import { userLogout } from '../service/userLogout/userLogout';


const initialState: UserSchema = {
  _inited: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(initAuthData.fulfilled, (state, action) => {
        state.authData = action.payload;
        state._inited = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.authData = undefined;
      });
  }
});

export const {
  reducer: userReducer,
  actions: userActions
} = userSlice;
