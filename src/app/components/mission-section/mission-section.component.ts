import { Component, OnInit } from '@angular/core';
import { uniqueMissions } from '../../misc/missions';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.component.html',
  styleUrls: ['./mission-section.component.scss']
})
export class MissionSectionComponent implements OnInit {
  missions = uniqueMissions;
  constructor() { }
  ngOnInit() { }
}
