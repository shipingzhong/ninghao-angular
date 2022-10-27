import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PostComponent } from '../post/post.component';
import { CanDeactiveGuard } from './admin/can-deactive.guard';
import { ObeservableDemoComponent } from './obeservable-demo/obeservable-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'child-routes',
        component: ChildRoutesComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((module) => module.AdminModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'observable',
        component: ObeservableDemoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
