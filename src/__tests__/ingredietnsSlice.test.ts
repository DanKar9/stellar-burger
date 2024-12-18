import { ingredientsSlice, initialState, getIngredientsThunk } from '../services/slices/ingredientsSlice';


 describe('Проверяем ingredientSlice', () => {

    it('Проверка изменения isLoading на true', () => {
        const actualState = {
            isLoading: true,
            ingredients: []
        }

        const newState = ingredientsSlice.reducer(
            {...initialState},
            getIngredientsThunk.pending('')
        )
        expect(newState).toEqual(actualState)
    })

    it('Проверка на rejected', () => {
        const testError = new Error ('test error')
        const newState = ingredientsSlice.reducer(
            {...initialState},
            getIngredientsThunk.rejected(testError,'')
        )
        expect(newState).toEqual(initialState)
    })

    it('Обновление данных ингридиентов и изменение isLoading на false при отправке fulfilled', () => {
        const testDataIngredients = [
            {
              _id: '2',
              name: 'Соус Spicy-X',
              type: 'sauce',
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
              image_mobile:'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
              image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png'
            }
        ]

        const actualState = {
            isLoading: false,
            ingredients: testDataIngredients
        }

        const newState = ingredientsSlice.reducer(
            {...initialState},
            getIngredientsThunk.fulfilled(testDataIngredients,'')
        )

        expect(newState).toEqual(actualState)
    })
 })