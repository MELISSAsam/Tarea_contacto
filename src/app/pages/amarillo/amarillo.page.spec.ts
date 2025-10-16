import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmarilloPage } from './amarillo.page';

describe('AmarilloPage', () => {
  let component: AmarilloPage;
  let fixture: ComponentFixture<AmarilloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
