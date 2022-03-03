import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplissageSilosComponent } from './remplissage-silos.component';

describe('RemplissageSilosComponent', () => {
  let component: RemplissageSilosComponent;
  let fixture: ComponentFixture<RemplissageSilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemplissageSilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemplissageSilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
