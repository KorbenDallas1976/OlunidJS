import { Component }       from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'olu-app',
  template: `
    <top-menu></top-menu>
    <div style="padding: 10px;">
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'Olunid App';
}
