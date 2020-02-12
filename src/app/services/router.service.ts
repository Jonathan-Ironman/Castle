import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private routeIndex: number;
  private routeNames = [
    { name: 'heroes', skip: false },
    { name: 'tavern', skip: false },
    { name: 'missions', skip: false },
    { name: 'assignments', skip: true },
    { name: 'mission-control', skip: false }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlName = event.urlAfterRedirects.split('/')[1];
        this.routeIndex = this.routeNames.findIndex(r => r.name === urlName);
      }
    });
  }

  navNext(): void {
    this.routeIndex++;
    if (this.routeIndex > this.routeNames.length - 1) {
      this.routeIndex = 0;
    }

    if (this.routeNames[this.routeIndex].skip) {
      return this.navNext();
    }

    this.router.navigate([this.routeNames[this.routeIndex].name]);
  }

  navPrev(): void {
    this.routeIndex--;
    if (this.routeIndex < 0) {
      this.routeIndex = this.routeNames.length - 1;
    }

    if (this.routeNames[this.routeIndex].skip) {
      return this.navPrev();
    }

    this.router.navigate([this.routeNames[this.routeIndex].name]);
  }
}
