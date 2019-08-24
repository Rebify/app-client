import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PersonalComponent } from './components/personal/personal.component';
import { TableComponent } from './components/table/table.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthFormComponent,
    PanelComponent,
    MenuComponent,
    PaymentsComponent,
    PersonalComponent,
    TableComponent,
    MenuFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
