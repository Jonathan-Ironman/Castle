import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dbService: DatabaseService
  ) {}

  addUser = () => {
    this.dbService.addUser();
  };

  login = () => {
    this.authService.authenticate();
  };

  ngOnInit() {}
}
