import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GroceriesStoreState} from '../store/reducer';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {selectProducts} from '../store/selectors';
import {addProduct} from '../store/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private readonly store: Store<GroceriesStoreState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProducts);
  }

  addProduct(product: Product): void {
    this.store.dispatch(addProduct({product}));
  }
}
