import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { RouterService } from './router.service';

describe('RouterService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])]
    })
  );

  it('should be created', () => {
    const service: RouterService = TestBed.inject(RouterService);
    expect(service).toBeTruthy();
  });
});
