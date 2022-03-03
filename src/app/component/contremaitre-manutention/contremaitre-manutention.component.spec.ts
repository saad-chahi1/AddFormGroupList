import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContremaitreManutentionComponent } from './contremaitre-manutention.component';

describe('ContremaitreManutentionComponent', () => {
  let component: ContremaitreManutentionComponent;
  let fixture: ComponentFixture<ContremaitreManutentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContremaitreManutentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContremaitreManutentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
