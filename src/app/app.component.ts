import { Component } from '@angular/core';
import { ListComponent } from "./components/list/list.component";


@Component({
  selector: 'app-root',
  imports: [ ListComponent],
  template: '<app-list></app-list>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grocery-crud-app';
}
