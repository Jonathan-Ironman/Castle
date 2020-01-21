import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectResourceState } from '../../store/reducers';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  gold: Readonly<number>;

  // subscribeUserList = () =>
  //   this.dbService.getUsers().subscribe(res => {
  //     const userdata = res.map(i => i.payload.doc.data());
  //     this.users = userdata;
  //   });

  ngOnInit() {
    this.store.select(selectResourceState).subscribe(
      resourses => this.gold = resourses.gold
    );
  }
}
