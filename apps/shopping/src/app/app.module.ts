import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    TabMenuModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          redirectTo:'dashboard',
          pathMatch:'full'
        },
        {
          path: 'products',
          loadChildren: () =>
            import('products/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
