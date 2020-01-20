import { Component, OnInit } from '@angular/core';
import { uniqueMissions } from '../../misc/missions';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.component.html',
  styleUrls: ['./mission-section.component.scss']
})
export class MissionSectionComponent implements OnInit {
  missions = uniqueMissions;

  canAssignHero(mission: Mission): boolean {
    return true;
  }

  constructor() { }
  ngOnInit() { }
}
