import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash', component: DashComponent ,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
