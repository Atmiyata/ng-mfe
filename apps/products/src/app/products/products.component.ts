import { Component, ChangeDetectionStrategy } from '@angular/core';

import { map, Observable, of } from 'rxjs';
import { Product } from '../shared/product.interface';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'ng-mfe-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  products$:Observable<Product[]> = of([]);

	responsiveOptions:Array<{breakpoint:string,numVisible:number,numScroll:number}> = [];

	constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts().pipe(map((res:{data:Product[]}) => res?.data))
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

}
