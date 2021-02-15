import {createAction, props} from '@ngrx/store';
import {Product} from '../models/product';

export const loadProducts = createAction('[Product] Load Products');
export const loadGroceryList = createAction('[GroceryList] Load GroceryList', props<{products: Product[]}>());
export const saveGroceryList = createAction('[GroceryList] Save GroceryList');

export const addProduct = createAction('[GroceryList] Add Product', props<{product: Product}>());
