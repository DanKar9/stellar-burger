import {
    burgerConstructorSlice,
    initialState,
    addIngredient,
    removeIngredient,
    upIngredient,
    downIngredient,
    resetConstructor
  } from '../services/slices/burgerConstructorSlice';
  import { TConstructorIngredient } from '../utils/types';



describe('Проверяем бургерСлайс', () => {
    const sauce: TConstructorIngredient = {
        id: '4',
        _id: "643d69a5c3f7b9001cfa0942",
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png'
      };
      const main: TConstructorIngredient = {
        id: '643d69a5c3f7b9001cfa093e',
        _id: '2',
        name: 'Филе Люминесцентного тетраодонтимформа',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
      };
      const bun: TConstructorIngredient = {
        id: '643d69a5c3f7b9001cfa093c',
        _id: '1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
      };
    it('Проверяем добавление элемента', () => {
        const newState = burgerConstructorSlice.reducer(
               initialState,
               addIngredient(sauce) 
        )
        expect(newState.ingredients).toHaveLength(1)
        const updatedObj = { ...newState.ingredients[0] } as Record<string, any>;
        delete updatedObj.id;
        const initialObject = { ...sauce } as Record<string, any>;
        delete initialObject.id;
        expect(updatedObj).toEqual(initialObject);
    })


    it('Проверка удаления ингредиента', () => {
        const initialState = {
            bun:null,
            ingredients: [sauce]
        }
        const newState = burgerConstructorSlice.reducer(
            initialState,
            removeIngredient(sauce)
        )
        expect(newState.ingredients).toHaveLength(0)
    })

    it('Проверка поднятия элемента  вверх', () => {
        const actualState = {
            bun:null,
            ingredients: [sauce, main]
        };
        const newState =burgerConstructorSlice.reducer(
            actualState,
            upIngredient(1)
        );
        expect(newState.ingredients).toEqual([main, sauce])
    })

    it('Проверка перемещения  элемента вниз', () => {
        const actualState = {
            bun:null,
            ingredients: [sauce, main]
        }
        const newState = burgerConstructorSlice.reducer(
            actualState,
            downIngredient(0)
        )
        expect(newState.ingredients).toEqual([main, sauce])
    })


    it('Проверка сброса настроек',() => {
        const actualState = {
            bun:null,
            ingredients: [sauce,main]
        }
        const newState = burgerConstructorSlice.reducer(
            actualState,
            resetConstructor()
        )
        expect(newState).toEqual(initialState)
    })
})