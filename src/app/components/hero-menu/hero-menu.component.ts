import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from 'src/app/models/hero.model';
import { HeroSelectors } from 'src/app/store/selectors/hero.selector';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-hero-menu',
  templateUrl: './hero-menu.component.html',
  styleUrls: ['./hero-menu.component.scss']
})
export class HeroMenuComponent implements OnInit {
  heroes: readonly Hero[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(HeroSelectors.hiredHeroes).subscribe(
      heroes => this.heroes = heroes
    );
  }
}
