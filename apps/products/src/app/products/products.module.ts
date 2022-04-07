import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import {ButtonModule} from 'primeng/button';

import {RatingModule} from 'primeng/rating';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [ProductsComponent],
  imports: [

    HttpClientModule,
    RatingModule,
    HttpClientModule,

    CarouselModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ProductsRoutingModule],
    providers:[ProductService]
})
export class ProductsModule {}
