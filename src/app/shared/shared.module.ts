import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HiglightDirective } from './directives/higlight/higlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HiglightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  exports: [
    HiglightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule]
})
export class SharedModule {}
