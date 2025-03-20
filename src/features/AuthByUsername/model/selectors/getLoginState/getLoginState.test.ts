import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('return state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'password',
        isLoading: false,
        password: 'pass',
        username: 'user'
      }
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'password',
      isLoading: false,
      password: 'pass',
      username: 'user'
    });
  });
});
