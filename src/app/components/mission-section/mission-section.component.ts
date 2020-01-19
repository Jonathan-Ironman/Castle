import { Component, OnInit } from '@angular/core';
import { missions } from '../../misc/missions';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.component.html',
  styleUrls: ['./mission-section.component.scss']
})
export class MissionSectionComponent implements OnInit {
  missions = missions;
  constructor() { }

  ngOnInit() {
  }

}
