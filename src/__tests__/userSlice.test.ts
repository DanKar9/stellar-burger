import {
  userSlice,
  initialState,
  registerUserThunk,
  loginUserThunk,
  checkedUserAuthThunk,
  updateUserThunk,
  logoutUserThunk
} from '../services/slices/userSlice';

describe('Проверка работы userSlice', function () {
  // Запрос registerUserThunk:
  it('изменение isLoading на true при отправке pending', function () {
    const actualState = {
      isAuthChecked: false,
      isLoading: true,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      registerUserThunk.pending('', { email: '', name: '', password: '' })
    );
    expect(newState).toEqual(actualState);
  });

  it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const testError = new Error('test error');
    const newState = userSlice.reducer(
      { ...initialState },
      registerUserThunk.rejected(testError, '', {
        email: '',
        name: '',
        password: ''
      })
    );
    expect(newState).toEqual(actualState);
  });

  it('обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
    const testDataUser = {
      success: true,
      accessToken: 'my testToken',
      refreshToken: 'testToken',
      user: {
        email: 'test@gmail.com',
        name: 'TestFernando'
      }
    };
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: testDataUser.user
    };
    const newState = userSlice.reducer(
      { ...initialState },
      registerUserThunk.fulfilled(testDataUser, '', {
        email: 'test@gmail.com',
        name: 'TestFernando',
        password: 'testPassword'
      })
    );
    expect(newState).toEqual(actualState);
  });

  // Запрос loginUserThunk:
  it('изменение isLoading на true при отправке pending', function () {
    const actualState = {
      isAuthChecked: false,
      isLoading: true,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      loginUserThunk.pending('', { email: '', password: '' })
    );
    expect(newState).toEqual(actualState);
  });

  it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const testError = new Error('test error');
    const newState = userSlice.reducer(
      { ...initialState },
      loginUserThunk.rejected(testError, '', {
        email: '',
        password: ''
      })
    );
    expect(newState).toEqual(actualState);
  });

  it('обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
    const testDataUser = {
      success: true,
      accessToken: 'Bearer testToken',
      refreshToken: 'testToken',
      user: {
        email: 'test@gmail.com',
        name: 'TestFernando'
      }
    };
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: testDataUser.user
    };
    const newState = userSlice.reducer(
      { ...initialState },
      loginUserThunk.fulfilled(testDataUser, '', {
        email: 'test@gmail.com',
        password: 'testPassword'
      })
    );
    expect(newState).toEqual(actualState);
  });

  // Запрос checkedUserAuthThunk:
  it(' изменение isLoading на true при отправке pending', function () {
    const actualState = {
      isAuthChecked: false,
      isLoading: true,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      checkedUserAuthThunk.pending('')
    );
    expect(newState).toEqual(actualState);
  });

  it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const testError = new Error('test error');
    const newState = userSlice.reducer(
      { ...initialState },
      checkedUserAuthThunk.rejected(testError, '')
    );
    expect(newState).toEqual(actualState);
  });

  it(' обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
    const testDataUser = {
      success: true,
      accessToken: 'my testToken',
      refreshToken: 'MyToken',
      user: {
        email: 'test@gmail.com',
        name: 'TestFernando'
      }
    };
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: testDataUser.user
    };
    const newState = userSlice.reducer(
      { ...initialState },
      checkedUserAuthThunk.fulfilled(testDataUser, '')
    );
    expect(newState).toEqual(actualState);
  });

  // Запрос updateUserThunk:
  it('изменение isLoading на true при отправке pending', function () {
    const actualState = {
      isAuthChecked: false,
      isLoading: true,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      updateUserThunk.pending('', { email: '', name: '', password: '' })
    );
    expect(newState).toEqual(actualState);
  });

  it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const testError = new Error('test error');
    const newState = userSlice.reducer(
      { ...initialState },
      updateUserThunk.rejected(testError, '', {
        email: '',
        name: '',
        password: ''
      })
    );
    expect(newState).toEqual(actualState);
  });

  it('обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
    const testDataUser = {
      success: true,
      accessToken: 'my testToken',
      refreshToken: 'MyToken',
      user: {
        email: 'test@gmail.com',
        name: 'TestFernando'
      }
    };
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: testDataUser.user
    };
    const newState = userSlice.reducer(
      { ...initialState },
      updateUserThunk.fulfilled(testDataUser, '', {
        email: 'test@gmail.com',
        name: 'TestFernando',
        password: 'testPassword'
      })
    );
    expect(newState).toEqual(actualState);
  });

  // Запрос logoutUserThunk:
  it('изменение isLoading на true при отправке pending', function () {
    const actualState = {
      isAuthChecked: false,
      isLoading: true,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      logoutUserThunk.pending('')
    );
    expect(newState).toEqual(actualState);
  });

  it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const testError = new Error('test error');
    const newState = userSlice.reducer(
      { ...initialState },
      logoutUserThunk.rejected(testError, '')
    );
    expect(newState).toEqual(actualState);
  });

  it('обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
    const actualState = {
      isAuthChecked: true,
      isLoading: false,
      user: null
    };
    const newState = userSlice.reducer(
      { ...initialState },
      logoutUserThunk.fulfilled({ success: true }, '')
    );
    expect(newState).toEqual(actualState);
  });
});
