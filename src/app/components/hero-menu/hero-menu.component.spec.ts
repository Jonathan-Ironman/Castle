import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CastleMenuComponent } from './hero-menu.component';

describe('CastleMenuComponent', () => {
  let component: CastleMenuComponent;
  let fixture: ComponentFixture<CastleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CastleMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
