import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductLikedModule } from '@ng-mfe/product-liked';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, CardModule, ButtonModule,AvatarModule, DashboardRoutingModule,ProductLikedModule],
})
export class DashboardModule {}
