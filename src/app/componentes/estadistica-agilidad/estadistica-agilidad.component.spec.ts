import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaAgilidadComponent } from './estadistica-agilidad.component';

describe('EstadisticaAgilidadComponent', () => {
  let component: EstadisticaAgilidadComponent;
  let fixture: ComponentFixture<EstadisticaAgilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaAgilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaAgilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
