import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvamemoriaComponent } from './curvamemoria.component';

describe('CurvamemoriaComponent', () => {
  let component: CurvamemoriaComponent;
  let fixture: ComponentFixture<CurvamemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurvamemoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurvamemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
