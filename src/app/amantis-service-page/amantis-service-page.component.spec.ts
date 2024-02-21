import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisServicePageComponent } from './amantis-service-page.component';

describe('AmantisServicePageComponent', () => {
  let component: AmantisServicePageComponent;
  let fixture: ComponentFixture<AmantisServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisServicePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
