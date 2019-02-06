import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApiService } from "./services/api.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { AccountSelectorComponent } from './components/account-selector/account-selector.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SetupMfaComponent } from './components/setup-mfa/setup-mfa.component';

export const appRoutes: Routes = [
  {
      path: '',
      children: [
          { path: 'orders', component: OrdersComponent },
          { path: 'account-selector', component: AccountSelectorComponent },
          { path: 'setup-mfa', component: SetupMfaComponent }
      ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountSelectorComponent,
    OrdersComponent,
    SetupMfaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    QRCodeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
