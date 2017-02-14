import { Component, OnInit } from '@angular/core';
import 'semantic-ui-sidebar/sidebar.min.js';
declare var $:any;
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor() { }

   // setting for sidebar
   toggleNav(): void {
    $('.ui.labeled.icon.sidebar')
    .sidebar({context:$('my-app')})
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle');
  }

  ngOnInit() { }
}