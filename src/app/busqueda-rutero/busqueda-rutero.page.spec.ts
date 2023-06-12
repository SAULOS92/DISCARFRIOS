import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaRuteroPage } from './busqueda-rutero.page';

describe('BusquedaRuteroPage', () => {
  let component: BusquedaRuteroPage;
  let fixture: ComponentFixture<BusquedaRuteroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedaRuteroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
