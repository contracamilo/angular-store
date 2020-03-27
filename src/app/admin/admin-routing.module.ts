import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducFormComponent } from './components/produc-form/produc-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FromProductComponent } from './components/from-product/from-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProducFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: FromProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
