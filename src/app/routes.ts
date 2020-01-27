import { Routes } from '@angular/router';
import { HeroMenuComponent, HeroScreenType } from './components/hero-menu/hero-menu.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroMenuComponent, data: { screenType: HeroScreenType.main } },
    { path: 'tavern', component: HeroMenuComponent, data: { screenType: HeroScreenType.recruit } },
    {
        path: 'missions', component: MissionSectionComponent,
        // TODO: Doesn't render like this
        // children: [
        //     { path: 'assignments/:missionId', component: HeroAssignmentComponent },
        // ]
    },
    { path: 'assignments/:missionId', component: HeroMenuComponent, data: { screenType: HeroScreenType.assign } },
    { path: 'mission-control', component: MissionControlComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    // { path: '**', component: PageNotFoundComponent }
];
