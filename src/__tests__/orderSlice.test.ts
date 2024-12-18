
import {
    orderSlice,
    initialState,
    getOrderByNumberThunk,
    createOrderBurgerThunk
  } from '../services/slices/orderSlice';
  
  describe('Проверка работы orderSlice', function () {
    // createOrderBurgerThunk:
    it('В запросе createOrderBurgerThunk, изменение isLoading на true при отправке pending', function () {
      const actualState = {
        isLoading: true,
        order: null
      };
      const newState = orderSlice.reducer(
        { ...initialState },
        createOrderBurgerThunk.pending('', [])
      );
      expect(newState).toEqual(actualState);
    });
  
    it('Получение ошибки и изменение isLoading на false при отправке rejected', function () {
      const testError = new Error('test error message');
      const newState = orderSlice.reducer(
        { ...initialState },
        createOrderBurgerThunk.rejected(testError, '', [])
      );
      expect(newState).toEqual(initialState);
    });
  
    it('Обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
      const testDataOrder = {
        success: true,
        order: {
          _id: '1',
          status: 'done',
          name: 'Бургер',
          ingredients: ['3', '7'],
          createdAt: '2024-12-08B12:22:34.124Z',
          updatedAt: '2024-12-08B12:22:35.258Z',
          number: 26721
        },
        name: 'бургер'
      };
      const actualState = {
        isLoading: false,
        order: testDataOrder.order
      };
      const newState = orderSlice.reducer(
        { ...initialState },
        createOrderBurgerThunk.fulfilled(testDataOrder, '', ['1'])
      );
      expect(newState).toEqual(actualState);
    });
  
    // getOrderByNumberThunk:
    it('изменение isLoading на true при отправке pending', function () {
      const actualState = {
        isLoading: true,
        order: null
      };
      const newState = orderSlice.reducer(
        { ...initialState },
        getOrderByNumberThunk.pending('', 0)
      );
      expect(newState).toEqual(actualState);
    });
  
    it('получение ошибки и изменение isLoading на false при отправке rejected', function () {
      const testError = new Error('test error');
      const newState = orderSlice.reducer(
        { ...initialState },
        getOrderByNumberThunk.rejected(testError, '', 0)
      );
      expect(newState).toEqual(initialState);
    });
  
    it('обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
      const testDataOrder = {
        success: true,
        orders: [
          {
            _id: '1',
            ingredients: ['3', '7'],
            status: 'done',
            name: 'бургер',
            createdAt: '2024-12-08B12:22:34.124Z',
            updatedAt: '2024-12-08B12:22:35.258Z',
            number: 26721
          }
        ]
      };
      const actualState = {
        isLoading: false,
        order: testDataOrder.orders[0]
      };
      const newState = orderSlice.reducer(
        { ...initialState },
        getOrderByNumberThunk.fulfilled(testDataOrder, '', 1)
      );
      expect(newState).toEqual(actualState);
    });
  });