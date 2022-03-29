import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ng-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'shopping';
  items: MenuItem[] = [];
  activeItem!: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:'dashboard'},
          {label: 'Products', icon: 'pi pi-fw pi-shopping-bag',routerLink:'products'},
      ];
      this.activeItem = this.items[0];
  }
}
