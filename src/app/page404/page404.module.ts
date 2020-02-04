import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundRoutingModule } from './page404routing.module';
import { Page404Component } from './components/page404.component';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, SharedModule, PageNotFoundRoutingModule]
})
export class Page404Module {}
