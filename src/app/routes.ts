import { Routes } from '@angular/router';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroMenuComponent },
    { path: 'missions', component: MissionSectionComponent },
    { path: 'adventure', component: MissionSectionComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    // { path: '**', component: PageNotFoundComponent }
];
