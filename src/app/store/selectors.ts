import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GroceriesStoreState} from './reducer';

export const groceryListEntityName = 'GroceryList';
export const groceryListStateFeature = createFeatureSelector<GroceriesStoreState>(groceryListEntityName);

export const selectProducts = createSelector(groceryListStateFeature, (state) => state.products);
export const selectGroceryList = createSelector(groceryListStateFeature, (state) => state.groceryList);
