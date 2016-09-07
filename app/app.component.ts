import { Component }       from '@angular/core';

@Component({
  selector: 'olu-app',
  template: `
    <top-menu></top-menu>
    <div style="padding: 10px">
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'Olunid App';
}
