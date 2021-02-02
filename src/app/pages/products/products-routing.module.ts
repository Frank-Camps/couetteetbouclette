import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products.component';



const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: '',
      component: ProductFormComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
