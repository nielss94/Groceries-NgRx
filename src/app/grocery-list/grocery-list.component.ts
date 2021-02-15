import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GroceriesStoreState} from '../store/reducer';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {selectGroceryList} from '../store/selectors';
import {saveGroceryList} from '../store/actions';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {

  groceryList$: Observable<Product[]>;

  constructor(private readonly store: Store<GroceriesStoreState>) { }

  ngOnInit(): void {
    this.groceryList$ = this.store.select(selectGroceryList);
  }

  saveGroceryList(): void {
    this.store.dispatch(saveGroceryList());
  }
}
