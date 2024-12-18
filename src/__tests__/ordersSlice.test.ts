
import {
    ordersSlice,
    initialState,
    getOrdersThunk,
  } from '../services/slices/ordersSlice';
  
  describe('Проверка работы ordersSlice', function () {
    //createOrderBurgerThunk:
    it('Изменение isLoading на true при отправке pending', function () {
      const actualState = {
        isLoading: true,
        orders: []
      };
      const newState = ordersSlice.reducer(
        { ...initialState },
        getOrdersThunk.pending('')
      );
      expect(newState).toEqual(actualState);
    });
  
    it('Получение ошибки и изменение isLoading на false при отправке rejected', function () {
      const testError = new Error('test error');
      const newState = ordersSlice.reducer(
        { ...initialState },
        getOrdersThunk.rejected(testError, '')
      );
      expect(newState).toEqual(initialState);
    });
  
    it('Обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', function () {
      const testDataOrders = [
        {
          _id: '1',
          status: 'done',
          name: 'бургер',
          ingredients: ['1', '4'],
          createdAt: '2024-12-02B11:51:23.514Z',
          updatedAt: '2024-12-02B11:51:24.295A',
          number: 83845
      }
    ]
      const actualState = {
        isLoading: false,
        orders: testDataOrders
      };
      const newState = ordersSlice.reducer(
        { ...initialState },
        getOrdersThunk.fulfilled(testDataOrders, '')
      );
      expect(newState).toEqual(actualState);
    });
  
})