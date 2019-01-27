import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApiService } from "./services/api.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountSelectorComponent } from './components/account-selector/account-selector.component';
import { OrdersComponent } from './components/orders/orders.component';

export const appRoutes: Routes = [
  {
      path: '',
      children: [
          { path: 'orders', component: OrdersComponent },
          { path: 'account-selector', component: AccountSelectorComponent }
      ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountSelectorComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
