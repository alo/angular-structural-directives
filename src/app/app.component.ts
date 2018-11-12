import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-structural-directives';
  flag = true;

  toggle() {
    this.flag = !this.flag;
  }
}
