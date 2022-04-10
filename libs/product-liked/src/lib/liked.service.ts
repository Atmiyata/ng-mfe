import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { LikedProduct } from './liked.interface';

@Injectable({
  providedIn: 'root',
})
export class LikedService {
  private likedProduct: BehaviorSubject<LikedProduct[]> = new BehaviorSubject<
    LikedProduct[]
  >([]);

  likedProduct$: Observable<LikedProduct[]> = this.likedProduct.asObservable();

  setLikeProduct(product: LikedProduct) {
    let likedProducts: LikedProduct[] = this.likedProduct.value;

    if (!product.liked)
      likedProducts = likedProducts.filter((prod) => prod.id !== product.id);
    else likedProducts.push(product);

    this.likedProduct.next(likedProducts);
  }
}
