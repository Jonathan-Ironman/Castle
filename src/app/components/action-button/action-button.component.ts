import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss'],
    standalone: false
})
export class ActionButtonComponent implements OnInit {
  @Input()
  enabled: boolean | null;
  @Input()
  disabled: boolean | null;

  constructor() { }
  ngOnInit() { }
}
