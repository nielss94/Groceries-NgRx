import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {map, mergeMap, take, tap} from 'rxjs/operators';
import {GroceriesStoreState} from './reducer';
import {Store} from '@ngrx/store';
import {from, pipe} from 'rxjs';
import {loadGroceryList, saveGroceryList} from './actions';
import {selectGroceryList} from './selectors';

@Injectable()
export class GroceryListEffects {

  // on route to grocery list > load grocery list
  init$ = createEffect(() => this.actions$.pipe(
    take(1),
    pipe(
      map(() => loadGroceryList({ products: JSON.parse(localStorage.getItem('groceryList'))}))
    )
    )
  );

  // save grocery list to localstorage
  saveGroceryListToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(saveGroceryList),
    map(() => this.store.select(selectGroceryList)),
    tap((groceries$) => {
      groceries$.subscribe(groceries => localStorage.setItem('groceryList', JSON.stringify(groceries))
      );
    })
    ),
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private readonly store: Store<GroceriesStoreState>) {
  }
}
