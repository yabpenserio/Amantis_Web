import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisLandingPageComponent } from './amantis-landing-page.component';

describe('AmantisLandingPageComponent', () => {
  let component: AmantisLandingPageComponent;
  let fixture: ComponentFixture<AmantisLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
