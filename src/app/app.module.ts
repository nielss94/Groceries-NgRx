import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {groceryListEntityName} from './store/selectors';
import {groceriesStoreReducer} from './store/reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {GroceryListEffects} from './store/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({}),
    StoreModule.forFeature(groceryListEntityName, groceriesStoreReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([GroceryListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
