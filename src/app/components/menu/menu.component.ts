import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() { }

  addUser = () => {
    // this.dbService.addUser();
  }

  login = () => {
    // this.authService.authenticate();
  }

  ngOnInit() { }
}
