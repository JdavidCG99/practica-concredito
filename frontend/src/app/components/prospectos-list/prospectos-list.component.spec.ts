import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectosListComponent } from './prospectos-list.component';

describe('ProspectosListComponent', () => {
  let component: ProspectosListComponent;
  let fixture: ComponentFixture<ProspectosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
