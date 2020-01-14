import { Routes } from '@angular/router';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';

export const appRoutes: Routes = [
    { path: 'missions', component: MissionSectionComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    {
        path: 'heroes', component: HeroMenuComponent, data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];
