import { Component }       from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'olu-home',
  templateUrl: 'app/home.component.html'
})

export class HomeComponent {
  constructor(
    /*private router: Router*/
    ) {
  };
  title = 'Home';
  gotoAbout() {
    let link = ['About'];
    /*this.router.navigate(link);*/
  }

}
