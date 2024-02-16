import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisWipPageComponent } from './amantis-wip-page.component';

describe('AmantisWipPageComponent', () => {
  let component: AmantisWipPageComponent;
  let fixture: ComponentFixture<AmantisWipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisWipPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisWipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
