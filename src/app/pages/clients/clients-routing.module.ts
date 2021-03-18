import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
//   path: '',
//   component: ProductsComponent,
//   children: [
//     {
//       path: '',
//       component: ProductsAllComponent,
//     },
//     {
//       path: 'add',
//       component: ProductFormComponent,
//     },
//     {
//       path: 'properties',
//       component: ProductPropertiesComponent,
//     },
//   ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {
}
