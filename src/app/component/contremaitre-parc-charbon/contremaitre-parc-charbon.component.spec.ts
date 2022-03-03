import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContremaitreParcCharbonComponent } from './contremaitre-parc-charbon.component';

describe('ContremaitreParcCharbonComponent', () => {
  let component: ContremaitreParcCharbonComponent;
  let fixture: ComponentFixture<ContremaitreParcCharbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContremaitreParcCharbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContremaitreParcCharbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
