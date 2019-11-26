import {Component} from "@angular/core";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html'
})
export class MyComponent {
  name = 'Name';
  year = 2020;
  add() {
    this.name = 'Go'
  }
}
