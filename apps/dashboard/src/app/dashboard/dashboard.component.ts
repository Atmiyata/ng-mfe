import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LikedProduct, LikedService } from '@ng-mfe/product-liked';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'ng-mfe-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  likedProducts$: Observable<LikedProduct[]> = of([]);
  constructor(private productLikedService: LikedService) {}

  ngOnInit(): void {
    this.likedProducts$ = this.productLikedService.likedProduct$;
  }
}
