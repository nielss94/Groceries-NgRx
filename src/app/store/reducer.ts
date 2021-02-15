import {Product} from '../models/product';
import {Action, createReducer, on} from '@ngrx/store';
import { addProduct, loadGroceryList } from './actions';

export interface GroceriesStoreState {
  products: Product[];
  groceryList: Product[];
}

export const initialState: GroceriesStoreState = {
  products: [
    {
      name: 'Apple',
      description: 'Delicious sphere-shaped fruit.'
    },
    {
      name: 'Cookie',
      description: 'Crunchy and tasty.'
    },
  ],
  groceryList: []
};

export function groceriesStoreReducer(groceriesStoreState: GroceriesStoreState, actionCreator: Action): unknown {
  return createReducer(
    initialState,
    on(addProduct, (state, product) => {
      return ({
        ...state,
        groceryList: [...state.groceryList, product.product]
      });
    }),
    on(loadGroceryList, (state, groceryList) => {
      return ({
        ...state,
        groceryList: [...state.groceryList, ...groceryList.products]
      });
    }),
  )(groceriesStoreState, actionCreator);
}
