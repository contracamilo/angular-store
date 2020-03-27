import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProducFormComponent } from './components/produc-form/produc-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FromProductComponent } from './components/from-product/from-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [ProducFormComponent, NavComponent, TableComponent, DashboardComponent, ProductListComponent, FromProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }