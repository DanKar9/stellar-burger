import {
    feedSlice,
    initialState,
    getFeedThunk
  } from '../services/slices/feedSlice';

 describe('Проверяем feedSlice', () => {

    it('Проверка изменения isLoading на true', () => {
        const actualState = {
            isLoading: true,
            feed: {
                orders: [],
                total: 0,
                totalToday: 0
            }
        }

        const newState = feedSlice.reducer(
            {...initialState},
            getFeedThunk.pending('')
        )
        expect(newState).toEqual(actualState)
    })

    it('Проверка на rejected', () => {
        const testError = new Error ('test error message')
        const newState = feedSlice.reducer(
            {...initialState},
            getFeedThunk.rejected(testError,'')
        )
        expect(newState).toEqual(initialState)
    })

    it('Обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', () => {
        const feedState = {
            orders: [
                {
                _id: '1234',
                ingredients: ['1', '4', '7', '1'],
                status: 'done',
                name: 'Тестовый бургер',
                createdAt: '2024-09-02T17:56:34.604Z',
                updatedAt: '2024-09-02T17:56:35.115Z',
                number: 51871
            }
        ],
            total: 5,
            totalToday: 10
        }

        const actualState = {
            isLoading: false,
            feed: feedState
        }

        const newState = feedSlice.reducer(
            {...initialState},
            getFeedThunk.fulfilled(feedState,'')
        )

        expect(newState).toEqual(actualState)
    })
 })