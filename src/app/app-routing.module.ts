import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './@templates/auth/auth.component';
import { DashboardComponent } from './@templates/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () =>
      import("./@templates/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "",
    component: DashboardComponent,
    loadChildren: () =>
      import("./@templates/dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
