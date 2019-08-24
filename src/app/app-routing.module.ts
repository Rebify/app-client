import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PersonalComponent } from './components/personal/personal.component';
import { TableComponent } from './components/table/table.component';

import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'table',
    component: TableComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
