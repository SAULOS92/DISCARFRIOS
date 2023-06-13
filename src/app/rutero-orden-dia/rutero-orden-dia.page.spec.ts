import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RuteroOrdenDiaPage } from './rutero-orden-dia.page';

describe('RuteroOrdenDiaPage', () => {
  let component: RuteroOrdenDiaPage;
  let fixture: ComponentFixture<RuteroOrdenDiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RuteroOrdenDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
