import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaAdivinaComponent } from './estadistica-adivina.component';

describe('EstadisticaAdivinaComponent', () => {
  let component: EstadisticaAdivinaComponent;
  let fixture: ComponentFixture<EstadisticaAdivinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaAdivinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaAdivinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
