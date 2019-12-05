import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroMenuComponent } from './hero-menu.component';

describe('HeroMenuComponent', () => {
  let component: HeroMenuComponent;
  let fixture: ComponentFixture<HeroMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
