import { of, map, Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { Product, InventoryStatus } from '../shared/product.interface';

@Component({
  selector: 'ng-mfe-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<Product[]> = of([]);

  severityByInventoryStatus = {
    [InventoryStatus.INSTOCK]: 'success',
    [InventoryStatus.LOWSTOCK]: 'warning',
    [InventoryStatus.OUTOFSTOCK]: 'danger',
  };

  responsiveOptions: Array<{
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }> = [];

  constructor(private productService: ProductService) {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((res: { data: Product[] }) => res?.data));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
