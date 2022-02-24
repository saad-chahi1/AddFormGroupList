import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteTransfereesComponent } from './quantite-transferees.component';

describe('QuantiteTransfereesComponent', () => {
  let component: QuantiteTransfereesComponent;
  let fixture: ComponentFixture<QuantiteTransfereesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantiteTransfereesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteTransfereesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
