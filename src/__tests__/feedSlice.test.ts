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
        const testError = new Error ('test error')
        const newState = feedSlice.reducer(
            {...initialState},
            getFeedThunk.rejected(testError,'rejected')
        )
        expect(newState).toEqual(initialState)
    })

    it('изменение isLoading на false при отправке fulfilled', () => {
        const feedState = {
            orders: [
                {
                _id: '1',
                status: 'done',
                name: 'бургер',
                ingredients: ['1', '4'],
                createdAt: '2024-12-02B11:51:23.514Z',
                updatedAt: '2024-12-02B11:51:24.295A',
                number: 83845
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