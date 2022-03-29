import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-dashboard-entry',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
