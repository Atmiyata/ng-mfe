import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children:[{
          path:'',
          loadChildren:() => import('../products/products.module').then(m => m.ProductsModule)
        }]
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
