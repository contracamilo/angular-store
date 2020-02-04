import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Page404Component } from './components/page404.component';

const routes: Routes = [
  {
    path: '',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
