import { NgModule } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from '../shared/product.service';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    HttpClientModule,
    RatingModule,
    HttpClientModule,
    TagModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ProductsRoutingModule,
  ],
  providers: [ProductService],
})
export class ProductsModule {}
