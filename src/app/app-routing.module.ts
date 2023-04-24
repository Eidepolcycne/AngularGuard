import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './core/auth.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [IsConnectedGuard]
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate: [IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
