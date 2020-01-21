import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { AppState } from '../../store/reducers';
import { MissionSelectors } from '../../store/selectors/mission.selector';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.component.html',
  styleUrls: ['./mission-section.component.scss']
})
export class MissionSectionComponent implements OnInit {
  missions: readonly Mission[];

  canAssignHero(mission: Mission): boolean {
    return true;
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(MissionSelectors.activeMissions).subscribe(
      activeMissions => this.missions = activeMissions
    );
  }
}
