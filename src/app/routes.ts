import { Routes } from '@angular/router';
import { HeroAssignmentComponent } from './components/hero-assignment/hero-assignment.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { HeroRecruitComponent } from './components/hero-recruit/hero-recruit.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroMenuComponent },
    { path: 'tavern', component: HeroRecruitComponent },
    {
        path: 'missions', component: MissionSectionComponent,
        // TODO: Doesn't render like this
        // children: [
        //     { path: 'assignments/:missionId', component: HeroAssignmentComponent },
        // ]
    },
    { path: 'assignments/:missionId', component: HeroAssignmentComponent },
    { path: 'mission-control', component: MissionControlComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    // { path: '**', component: PageNotFoundComponent }
];
