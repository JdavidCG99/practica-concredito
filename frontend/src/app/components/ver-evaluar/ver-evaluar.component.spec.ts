import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEvaluarComponent } from './ver-evaluar.component';

describe('VerEvaluarComponent', () => {
  let component: VerEvaluarComponent;
  let fixture: ComponentFixture<VerEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
