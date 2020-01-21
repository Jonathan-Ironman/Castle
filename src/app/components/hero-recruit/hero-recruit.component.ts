import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroActions } from '../../store/actions/hero.actions';
import { AppState } from '../../store/reducers';
import { ResourceActions } from '../../store/actions/resource.actions';
import { Hero } from 'src/app/models/hero.model';
import { HeroSelectors } from '../../store/selectors/hero.selector';
import { selectResourceState } from '../../store/reducers/index';

@Component({
  selector: 'app-hero-recruit',
  templateUrl: './hero-recruit.component.html',
  styleUrls: ['./hero-recruit.component.scss']
})
export class HeroRecruitComponent implements OnInit {
  heroes: readonly Hero[];
  gold: Readonly<number>;

  canHireHero(hiringPrice: number) {
    return hiringPrice <= this.gold;
  }

  recruit(hero: Hero) {
    if (!this.canHireHero(hero.hiringFee)) {
      return;
    }

    this.store.dispatch(HeroActions.hireHero(hero));
    this.store.dispatch(HeroActions.removeRecruitableHero(hero));
    this.store.dispatch(ResourceActions.substractGold(hero.hiringFee));
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(HeroSelectors.recruitableHeroes).subscribe(
      heroes => this.heroes = heroes
    );

    this.store.select(selectResourceState).subscribe(
      resourses => this.gold = resourses.gold
    );
  }
}
