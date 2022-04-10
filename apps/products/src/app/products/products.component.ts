import { of, map, Observable, combineLatest } from 'rxjs';
import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';

//sahred likedproduct
import { LikedProduct, LikedService } from '@ng-mfe/product-liked';

import { ProductService } from '../shared/product.service';
import { Product, InventoryStatus } from '../shared/product.interface';

@Component({
  selector: 'ng-mfe-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  severityByInventoryStatus = {
    [InventoryStatus.INSTOCK]: 'success',
    [InventoryStatus.LOWSTOCK]: 'warning',
    [InventoryStatus.OUTOFSTOCK]: 'danger',
  };

  labelByInventoryStatus = {
    [InventoryStatus.INSTOCK]: 'IN STOCK',
    [InventoryStatus.LOWSTOCK]: 'LOW STOCK',
    [InventoryStatus.OUTOFSTOCK]: 'OUT OF STOCK',
  };

  responsiveOptions: Array<{
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }> = [];

  constructor(
    private productService: ProductService,
    private likedProductService: LikedService
  ) {}

  ngOnInit(): void {
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

    //preselect liked product after navigating from different route
    this.products$ = combineLatest([
      this.getProducts(),
      this.likedProductService.likedProduct$,
    ]).pipe(
      map(([products, likedProducts]) =>
        products.map((product) => ({
          ...product,
          liked: likedProducts.findIndex((p) => p.id === product.id) !== -1,
        }))
      )
    );
  }

  likeProduct(product: LikedProduct) {
    product.liked = !product.liked;
    this.likedProductService.setLikeProduct(product);
  }

  private getProducts(): Observable<Product[]> {
    return this.productService
      .getProducts()
      .pipe(map((res: { data: Product[] }) => res?.data));
  }
}
