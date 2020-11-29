import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngc2hw';

  chemeRender = true;

  names = ['Vítek', 'Marco', 'Zdeněk'];

  printName(name: string): void {
    console.debug(name);
  }
}
